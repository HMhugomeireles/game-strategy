import { PlayerResources } from "@/domain/entities";
import { PlayerResourcesLoad } from "@/domain/user-cases";

export class PlayerResourcesLoadService implements PlayerResourcesLoad {
  constructor (
    private readonly playerResourcesRepository: any
  ) {}

  async load(): Promise<PlayerResources> {

  };
}