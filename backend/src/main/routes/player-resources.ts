import { Router } from 'express'
import { adaptRoute } from '@/main/adapters';
import { factoryLoadPlayerResourceController } from '../factories/player';


export default (router: Router): void => {
  router.get('/player/:playerId/resources/all', adaptRoute(factoryLoadPlayerResourceController()));
}