import { cleanEnv, str } from 'envalid';

class Environment {
  constructor() {
    this.validate();
  }

  private validate() {
    cleanEnv(process.env, {
      ENVTYPE: str()
    })    
  }

  private getEnvType(): string {
    let env: any = process.env.NODE_ENV;
    return env.toString();
  }

  public setEnv() {
    const ENV = this.getEnvType();
    switch(ENV){
      case 'DEV':
        console.log(`Environment is ${this.getEnvType()}`);
        break;        
      case 'PROD':

      case 'TEST':


    }

  }

}


export default Environment;