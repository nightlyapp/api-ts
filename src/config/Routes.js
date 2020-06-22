"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = require("../routes/user.routes");
const pub_routes_1 = require("../routes/pub.routes");
const image_routes_1 = require("../routes/image.routes");
const fastinfo_routes_1 = require("../routes/fastinfo.routes");
const fastinfo_pub_routes_1 = require("../routes/fastinfo-pub.routes");
class Routes {
    constructor() {
        this.userRoutes = new user_routes_1.UserRoutes();
        this.pubRoutes = new pub_routes_1.PubRoutes();
        this.imageRoutes = new image_routes_1.ImageRoutes();
        this.fastInfoRoutes = new fastinfo_routes_1.FastInfoRoutes();
        this.fastInfoPubRoutes = new fastinfo_pub_routes_1.FastInfoPubRoutes();
    }
    routes(app) {
        this.userRoutes.user(app);
        this.pubRoutes.pub(app);
        this.imageRoutes.image(app);
        this.fastInfoRoutes.fastInfo(app);
        this.fastInfoPubRoutes.fastInfoPub(app);
    }
}
exports.default = Routes;
