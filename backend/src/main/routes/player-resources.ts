import { Router } from 'express'
import { adaptRoute } from '@/main/adapters';
import { LoadPlayerResourcesController } from '@/presentation/controllers/player/laod-player-resources';

export default (router: Router): void => {
  router.get('/player/:playerId/resources/all', adaptRoute(LoadPlayerResourcesController));
}