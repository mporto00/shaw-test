const HTTPStatus = require('http-status');
const config = require('../../config/env/config')();

function onSuccess(res, data, next) {
  return res.status(HTTPStatus.OK).json({
    success: true,
    response: data,
  });
}

function onServerError(res, message, err, next) {
  sendGELF(res.req, HTTPStatus.INTERNAL_SERVER_ERROR, err, 'error');
  return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: [message],
  });
}

function onError(res, err, message) {
  if (err.detail) {
     return onServerError(res, `${message} error: ${err}. detail: ${err.detail}.`, err);
  }
  return onServerError(res, `${message} error: ${err}.`, err);
}

function onSucessFalse(res, data, next) {
  return res.status(HTTPStatus.OK).json({
    success: false,
    response: data,
  });
}

function onServerError(res, message, err, next) {
  return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: [message],
  });
}

function errorHandlerApi(err, req, res, next) {
  return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    errorCode: 'ERR-001',
    source: req.user.username,
    message: ['Erro Interno do Servidor'],
  });
}

module.exports = {
  onSuccess,
  onError,
  onSucessFalse,
  onServerError,
  errorHandlerApi,
};
