
class ErrorHandler extends Error {
  constructor(statusCode, status, message) {
    super();
    this.statusCode = statusCode;
    this.status = status;
    this.message = message;
  }
}

const routeNotFound = () => {
  throw new ErrorHandler(404, 'fail', 'Route not found');
};

const handleError = (err, res, next) => {
  const { statusCode, status, message } = err;

  if (status) {
    res.status(statusCode).json({
      status,
      message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
  next();
};

module.exports = {
  ErrorHandler,
  handleError,
  routeNotFound,
};
