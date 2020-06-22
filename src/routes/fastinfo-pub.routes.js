"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastInfoPubRoutes = void 0;
const fastinfo_pub_controller_1 = require("../controllers/fastinfo-pub.controller");
class FastInfoPubRoutes {
    constructor() {
        this.fastInfoPubController = new fastinfo_pub_controller_1.FastInfoPubController();
    }
    fastInfoPub(app) {
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
exports.FastInfoPubRoutes = FastInfoPubRoutes;
