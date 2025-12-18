import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().valid("user", "admin").optional()
});

// Registration schema
export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("user", "admin").optional()
});

// General middleware to validate request body
export const validateBody = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { 
    abortEarly: false, 
    allowUnknown: true // allow extra fields like role
  }); 
  if (error) {
    return res.status(400).json({
      message: "Validation error",
      details: error.details.map((d) => d.message),
    });
  }

  req.body = value; // overwrite req.body with validated data
  next();
};

export const userIdParamSchema = Joi.object({
  id: Joi.number().integer().required()
});

export const validateParams = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.params, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      message: "Params validation error",
      details: error.details.map(d => d.message)
    });
  }

  req.params = value; // optional: overwrite params with validated value
  next();
};
