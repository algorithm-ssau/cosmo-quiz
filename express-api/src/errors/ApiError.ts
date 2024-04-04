export default class ApiError extends Error {
  status;
  stack;

  constructor(status: number, message: string, stack?: string) {
    super(message);
    this.status = status;
    this.stack = stack;
  }

  static Forbidden() {
    return new ApiError(403, 'Доступ запрещен');
  }

  static Unauthorized() {
    return new ApiError(401, 'Пользователь не авторизован');
  }

  static BadRequest(message: string, stack?: string) {
    return new ApiError(400, message, stack);
  }
}
