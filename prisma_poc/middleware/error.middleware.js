// export const errorHandler = (err, req, res, next) => {
//   console.error("ERROR ", err);

//   const statusCode = err.statusCode || 500;

//   res.status(statusCode).json({
//     success: false,
//     message: err.message || "Internal Server Error"
//   });
// };


// import { logger } from "../utils/logger.js";

// export const errorHandler = (err, req, res, next) => {
//   logger.error({
//     message: err.message,
//     stack: err.stack,
//     method: req.method,
//     url: req.originalUrl,
//     statusCode: err.statusCode || 500,
//   });

//   res.status(err.statusCode || 500).json({
//     success: false,
//     message: err.message || "Internal Server Error",
//   });
// };


import { Prisma } from "../bankingClient.js";


export class ApiError extends Error {
  constructor(statusCode, message, errors = null) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Centralized error handler middleware
 */
export const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let errors = err.errors || null;

  // Log error for debugging (in development)
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', {
      name: err.name,
      message: err.message,
      stack: err.stack,
      statusCode
    });
  }

  // Handle Prisma errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case 'P2002':
        // Unique constraint violation
        statusCode = 409;
        message = `Duplicate value: ${err.meta?.target?.join(', ') || 'field'} already exists`;
        break;
      
      case 'P2003':
        // Foreign key constraint violation
        statusCode = 400;
        message = `Invalid reference: ${err.meta?.field_name || 'related record'} does not exist`;
        break;
      
      case 'P2025':
        // Record not found
        statusCode = 404;
        message = 'Record not found';
        break;
      
      case 'P2014':
        // Invalid ID
        statusCode = 400;
        message = 'Invalid ID provided';
        break;
      
      case 'P2000':
        // Value too long
        statusCode = 400;
        message = `Value too long for field: ${err.meta?.column_name || 'field'}`;
        break;
      
      default:
        statusCode = 400;
        message = 'Database operation failed';
    }
  }

  // Handle Prisma validation errors
  if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = 400;
    message = 'Validation error: Invalid data provided';
  }

  // Handle Prisma initialization errors
  if (err instanceof Prisma.PrismaClientInitializationError) {
    statusCode = 500;
    message = 'Database connection failed';
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token';
  }

  if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token expired';
  }

  // Handle validation errors (from express-validator or custom validation)
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation failed';
    errors = err.errors;
  }

  // Handle syntax errors (malformed JSON)
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    statusCode = 400;
    message = 'Invalid JSON format';
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    message,
    ...(errors && { errors }),
    ...(process.env.NODE_ENV === 'development' && { 
      stack: err.stack,
      error: err 
    })
  });
};

/**
 * 404 Not Found handler
 */
export const notFoundHandler = (req, res, next) => {
  const error = new ApiError(404, `Route not found: ${req.originalUrl}`);
  next(error);
};