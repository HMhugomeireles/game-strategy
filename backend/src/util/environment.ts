import { cleanEnv, str } from 'envalid';

class Environment {
  constructor() {
    this.validate();
    this.setEnv();
  }

  private validate() {
    cleanEnv(process.env, {
      ENVTYPE: str(),
    });
  }

  private getEnvType(): string {
    const env: any = process.env.NODE_ENV;
    return env.toString();
  }

  private setEnv() {
    const ENV = this.getEnvType();
    switch (ENV) {
      case 'DEV':
        console.log(`Environment is ${this.getEnvType()}`);
        break;
      case 'PROD':

      case 'TEST':

    }

  }

}

export default Environment;
