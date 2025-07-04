class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode;
    this.isOperation = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
