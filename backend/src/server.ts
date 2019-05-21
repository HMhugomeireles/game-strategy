import App from './app';

/**
 * All Controllers import
 */
import PlayerController from './controllers/restApi/player.controller';

const app = new App([new PlayerController()]);

app.listen();
