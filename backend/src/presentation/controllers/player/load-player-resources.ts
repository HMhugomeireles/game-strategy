import { PlayerResources } from "@/domain/entities";
import { PlayerResourcesLoad } from "@/domain/user-cases";
import { Controller, HttpRequest, HttpResponse } from "@/presentation/contracts";
import { ok, serverError } from "@/presentation/helpers";


export class LoadPlayerResourcesController implements Controller {
  constructor(private readonly playerResourcesLoad: PlayerResourcesLoad) {}

  async handle(HttpRequest: HttpRequest): Promise<HttpResponse<PlayerResources>> {
    try {
      const playerResources = this.playerResourcesLoad.load()
      return ok(playerResources)
    } catch (error) {
      return serverError(error);
    }
  }
}
