import { UserRoutes } from "../routes/user.routes";
import { PubRoutes } from "../routes/pub.routes";
import { ImageRoutes } from "../routes/image.routes";

export default class Routes {

    public userRoutes = new UserRoutes();
    public pubRoutes = new PubRoutes();
    public imageRoutes = new ImageRoutes();

    public routes(app: any): void {
        this.userRoutes.user(app);
        this.pubRoutes.pub(app);
        this.imageRoutes.image(app);
    }

}