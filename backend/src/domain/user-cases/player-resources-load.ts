import { PlayerResources } from '@/domain/entities'

export interface PlayerResourcesLoad {
  load: () => Promise<PlayerResources>;
}