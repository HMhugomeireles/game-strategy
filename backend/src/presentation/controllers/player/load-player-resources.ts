import { Controller, HttpResponse, serverError } from "@/presentation/contracts";


export class LoadPlayerResourcesController implements Controller {
  // constructor(private readonly lastRankingLoader: any) {}

  async handle(): Promise<HttpResponse<any[]>> {
    try {
      return new Promise((resolve) => resolve);
    } catch (error) {
      return serverError(error);
    }
  }
}
