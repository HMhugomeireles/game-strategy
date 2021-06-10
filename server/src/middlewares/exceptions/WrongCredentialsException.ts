import HttpException from './HttpException';

class WrongCredentialsException extends HttpException {
  public constructor(){
    super(203, 'Wrong credentials.');
  }
}

export default WrongCredentialsException;