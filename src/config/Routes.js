"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = require("../routes/user.routes");
const pub_routes_1 = require("../routes/pub.routes");
const image_routes_1 = require("../routes/image.routes");
class Routes {
    constructor() {
        this.userRoutes = new user_routes_1.UserRoutes();
        this.pubRoutes = new pub_routes_1.PubRoutes();
        this.imageRoutes = new image_routes_1.ImageRoutes();
    }
    routes(app) {
        this.userRoutes.user(app);
        this.pubRoutes.pub(app);
        this.imageRoutes.image(app);
    }
}
exports.default = Routes;
