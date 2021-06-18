import 'module-alias/register';
import ExpressServer from './express/server';

ExpressServer
  .loadConfiguration()
  .start()