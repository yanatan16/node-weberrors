// errors.js
// Errors for web

// builtin
var util = require('util')

// Basic error
function WebError(code, default_message, message) {
  if (!(this instanceof WebError)) {
    return new WebError(code, default_message, message)
  }

  this.code = code
  this.message = message || default_message
  Error.call(this, message || default_message)
  Error.captureStackTrace(this, WebError)
}

util.inherits(WebError, Error)


module.exports = {
  WebError: WebError,

  // Common 400's
  NotFound: WebError.bind(null, 404, 'Not Found'),
  Unauthorized: WebError.bind(null, 401, 'Unauthorized'),
  BadRequest: WebError.bind(null, 400, 'Bad Request'),
  Forbidden: WebError.bind(null, 403, 'Forbidden'),

  // Common 500's
  InternalError: WebError.bind(null, 500, 'Internal Error'),
  NotImplemented: WebError.bind(null, 501, 'Not Implemented'),
  ServiceUnavailable: WebError.bind(null, 503, 'Service Unavailable'),
}