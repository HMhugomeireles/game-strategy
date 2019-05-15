import App from './app';
import Environment from './util/environment';
import PlayerController from './controllers/player.controller';

new Environment();

const app = new App([
    new PlayerController(),
  ],
 );

 app.listen();
