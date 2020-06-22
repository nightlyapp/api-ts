import { FastInfoController } from "../controllers/fastinfo.controller";

export class FastInfoRoutes {
  public fastInfoController: FastInfoController = new FastInfoController();

  public fastInfo(app: any): void {
    app.route("/api/fastinfo").get(this.fastInfoController.index);
    app.route("/api/fastinfo/:id").get(this.fastInfoController.getFastInfo);
    app.route("/api/fastinfo").post(this.fastInfoController.postFastInfo);
    app.route("/api/fastinfo/:id").put(this.fastInfoController.updateFastInfo);
  }
}
