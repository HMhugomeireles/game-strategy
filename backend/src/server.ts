import App from './app';

/**
 * All Controllers import
 */
import PlayerController from './controllers/restApi/player.controller';
import WorldController from './controllers/restApi/world.controller';
import CountryController from './controllers/restApi/country.controller';
import CityController from './controllers/restApi/city.controller';
import AuthenticationController from './controllers/restApi/authentication.controller';

const app = new App([
	new WorldController(),
	new PlayerController(),
	new CountryController(),
	new CityController(),
	new AuthenticationController()
]);

app.listen();
