"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controller_1 = require("../controllers/user.controller");
class UserRoutes {
    constructor() {
        this.userController = new user_controller_1.UserController();
    }
    user(app) {
        app.route("/api/user").get(this.userController.index);
        app.route("/api/user/:id").get(this.userController.getUser);
        app.route("/api/user").post(this.userController.postUser);
        app.route("/api/user/:id").put(this.userController.updateUser);
    }
}
exports.UserRoutes = UserRoutes;
