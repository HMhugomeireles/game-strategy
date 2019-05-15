import express from 'express';
import bodyParser from 'body-parser';
import Controller from './controllers/interfaces/controller.interface';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: Array<Controller>, port: number) {
        this.app = express();
        this.port = port;

        this.initMiddlewares();
        this.initControllers(controllers);
    }

    private initMiddlewares() {
        this.app.use(bodyParser.json);
    }

    private initControllers(controllers: Array<Controller>) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }

    public listen(): any {
        this.app.listen(this.port, () => {
            console.log(`App started on port ${this.port}.`);
        });
    }
}

export default App;