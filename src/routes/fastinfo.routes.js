"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastInfoRoutes = void 0;
const fastinfo_controller_1 = require("../controllers/fastinfo.controller");
class FastInfoRoutes {
    constructor() {
        this.fastInfoController = new fastinfo_controller_1.FastInfoController();
    }
    fastInfo(app) {
        app.route("/api/fastinfo").get(this.fastInfoController.index);
        app.route("/api/fastinfo/:id").get(this.fastInfoController.getFastInfo);
        app.route("/api/fastinfo").post(this.fastInfoController.postFastInfo);
        app.route("/api/fastinfo/:id").put(this.fastInfoController.updateFastInfo);
    }
}
exports.FastInfoRoutes = FastInfoRoutes;
