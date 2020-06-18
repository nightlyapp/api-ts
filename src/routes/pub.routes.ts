import { PubController } from "../controllers/pub.controller";
import cors from "cors";
export class PubRoutes {
  public pubController: PubController = new PubController();

  public pub(app: any): void {
    app.route("api/pub").get(this.pubController.index);
    app.route("api/pub/:id").get(this.pubController.getPub);
    app.route("api/pub").post(this.pubController.postPub);
    app.route("api/pub/:id").put(this.pubController.updatePub);
  }
}
