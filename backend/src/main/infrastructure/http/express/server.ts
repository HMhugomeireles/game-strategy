import express, { Express } from 'express'
import {
  ApplicationServerLoadConfiguration,
  ApplicationServerStart 
} from "@/infrastructure/http/server";


class ExpressServer implements ApplicationServerLoadConfiguration, ApplicationServerStart {
  private app: Express;
  
  constructor () {
    this.app = express();
    this.init()
  }

  private init(): void {
    
  }

  loadConfiguration(): ApplicationServerStart {
    throw new Error("Method not implemented.");
  }

  start(): void {
    
  }
  
}

export default new ExpressServer()