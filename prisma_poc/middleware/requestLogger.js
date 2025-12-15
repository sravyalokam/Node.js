import { logger } from "../utils/logger.js";

export const requestLogger = (req, res, next) => {
  logger.info({
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
  });
  next();
};
