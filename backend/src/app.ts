import bodyParser from 'body-parser';
import express from 'express';
import Controller from './controllers/interfaces/controller.interface';

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.initMiddlewares();
    this.initControllers(controllers);
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App started on port ${process.env.PORT}.`);
    });
  }

  private initMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

}

export default App;
