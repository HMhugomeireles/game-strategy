export type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

export type HttpRequest = {
  body: unknown;
};
