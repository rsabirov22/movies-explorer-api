const VALIDATION_ERROR_CODE = 400;
const NOT_AUTHORIZED = 401;
const NO_ACCESS = 403;
const USER_EXISTS = 409;
const DATA_NOT_FOUND_ERROR_CODE = 404;
const DEFAULT_ERROR_CODE = 500;

// 200 - запрос прошел успешно
// 201 - запрос прошел успешно, ресурс создан
// 401 - не авторизован
// 403 - нет прав нет доступа
// 500 - ошибка сервера
// 400 - невалидные данные
// 422 - невозможно обработать данные
// 404 - нет ресурса

module.exports = {
  VALIDATION_ERROR_CODE,
  NOT_AUTHORIZED,
  USER_EXISTS,
  DEFAULT_ERROR_CODE,
  DATA_NOT_FOUND_ERROR_CODE,
  NO_ACCESS,
};
