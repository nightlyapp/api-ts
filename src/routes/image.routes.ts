import { ImageController } from "../controllers/image.controller";
import cors from "cors";
export class ImageRoutes {
  public imageController: ImageController = new ImageController();

  public image(app: any): void {
    app.route("/api/image").post(this.imageController.index);
  }
}
