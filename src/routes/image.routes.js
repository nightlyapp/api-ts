"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageRoutes = void 0;
const image_controller_1 = require("../controllers/image.controller");
class ImageRoutes {
    constructor() {
        this.imageController = new image_controller_1.ImageController();
    }
    image(app) {
        app.route("/api/image").post(this.imageController.index);
    }
}
exports.ImageRoutes = ImageRoutes;
