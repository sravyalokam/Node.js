// export const errorHandler = (err, req, res, next) => {
//   console.error("ERROR ", err);

//   const statusCode = err.statusCode || 500;

//   res.status(statusCode).json({
//     success: false,
//     message: err.message || "Internal Server Error"
//   });
// };


import { logger } from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
    statusCode: err.statusCode || 500,
  });

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
