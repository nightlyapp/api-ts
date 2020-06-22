import { UserRoutes } from "../routes/user.routes";
import { PubRoutes } from "../routes/pub.routes";
import { ImageRoutes } from "../routes/image.routes";
import { FastInfoRoutes } from "../routes/fastinfo.routes";
import { FastInfoPubRoutes } from "../routes/fastinfo-pub.routes";

export default class Routes {
  public userRoutes = new UserRoutes();
  public pubRoutes = new PubRoutes();
  public imageRoutes = new ImageRoutes();
  public fastInfoRoutes = new FastInfoRoutes();
  public fastInfoPubRoutes = new FastInfoPubRoutes();

  public routes(app: any): void {
    this.userRoutes.user(app);
    this.pubRoutes.pub(app);
    this.imageRoutes.image(app);
    this.fastInfoRoutes.fastInfo(app);
    this.fastInfoPubRoutes.fastInfoPub(app);
  }
}
