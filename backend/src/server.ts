import App from './app';

/**
 * All Controllers import
 */
import PlayerController from './controllers/restApi/player.controller';
import WorldController from './controllers/restApi/world.controller';
import CountryController from './controllers/restApi/country.controller';
import CityController from './controllers/restApi/city.controller';

const app = new App([ new PlayerController(), new WorldController(), new CountryController(), new CityController() ]);

app.listen();
