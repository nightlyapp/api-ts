import { UserController } from "../controllers/user.controller";

export class UserRoutes {
  public userController: UserController = new UserController();

  public user(app: any): void {
    app.route("/api/user").get(this.userController.index);
    app.route("/api/user/:id").get(this.userController.getUser);
    app.route("/api/user").post(this.userController.postUser);
    app.route("/api/user/:id").put(this.userController.updateUser);
  }
}
