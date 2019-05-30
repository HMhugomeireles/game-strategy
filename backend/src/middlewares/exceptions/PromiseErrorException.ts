import HttpException from './HttpException';

class PromiseErrorException extends HttpException {
  public constructor(error: Error){
    super(500, error.message);
  }
}

export default PromiseErrorException;