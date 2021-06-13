import { Controller } from "@/presentation/contracts";
import { LoadPlayerResourcesController } from "@/presentation/controllers/player";


export const factoryLoadPlayerResourceController = (): Controller => {
  return new LoadPlayerResourcesController()
}