type Success = {
  payload: any
}

type NotValid = {
  error: unknown;
}

export interface AccessTokenManager {
  generate(): string;
  decode(code: string): Success | NotValid;
}