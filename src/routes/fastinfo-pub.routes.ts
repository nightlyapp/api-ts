import { FastInfoPubController } from "../controllers/fastinfo-pub.controller";

export class FastInfoPubRoutes {
  public fastInfoPubController: FastInfoPubController = new FastInfoPubController();

  public fastInfoPub(app: any): void {
    app.route("/api/fastinfopub").get(this.fastInfoPubController.index);
    app
      .route("/api/fastinfopub/:id")
      .get(this.fastInfoPubController.getFastInfoPub);
    app
      .route("/api/fastinfopub")
      .post(this.fastInfoPubController.postFastInfoPub);
    app
      .route("/api/fastinfopub/:id")
      .put(this.fastInfoPubController.updateFastInfoPub);
  }
}
