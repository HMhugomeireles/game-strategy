import { SignUpController } from "../signup"

describe('SignUp Controller', () => {
  it('Should return 400 if name is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'test@test.com',
        password: 'test-password',
        passwordConfirmation: 'test-password'
      }
    }
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Missing parameter name'))
  })
})
