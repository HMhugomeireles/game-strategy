export type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

/** Success */

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  data,
});

export const Accepted = (data: any): HttpResponse => ({
  statusCode: 202,
  data,
});

/** Error */

export const BadRequest = (data: any): HttpResponse => ({
  statusCode: 400,
  data,
});

export const Unauthorized = (data: any): HttpResponse => ({
  statusCode: 401,
  data,
});

export const PaymentRequired = (data: any): HttpResponse => ({
  statusCode: 402,
  data,
});

export const Forbidden = (data: any): HttpResponse => ({
  statusCode: 403,
  data,
})

export const NotFound = (data: any): HttpResponse => ({
  statusCode: 404,
  data,
})

/** Service Error */

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.stack,
});