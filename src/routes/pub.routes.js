"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubRoutes = void 0;
const pub_controller_1 = require("../controllers/pub.controller");
class PubRoutes {
    constructor() {
        this.pubController = new pub_controller_1.PubController();
    }
    pub(app) {
        app.route("/api/pub").get(this.pubController.index);
        app.route("/api/pub/:id").get(this.pubController.getPub);
        app.route("/api/pub").post(this.pubController.postPub);
        app.route("/api/pub/:id").put(this.pubController.updatePub);
    }
}
exports.PubRoutes = PubRoutes;
