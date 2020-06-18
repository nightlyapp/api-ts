import { User } from "../models/User";
import { sequelize } from "../config/configuration";
import { Request, Response } from "express";

export class UserController {
  public index(req: Request, res: Response) {
    User.findAll<User>({})
      .then((users: User[]) => res.json(users))
      .catch((err: Error) => res.sendStatus(500).send(err));
  }

  public getUser(req: Request, res: Response) {
    const id = req.params.id;
    User.findOne({ where: { id } })
      .then((user) => {
        res.json(user);
      })
      .catch((err: Error) => res.sendStatus(500).send(err));
  }

  public postUser(req: Request, res: Response) {
    const user = req.body;

    User.create(user)
      .then((data: any) => res.json(data))
      .catch((err: Error) => res.sendStatus(500).send(err));
  }

  public updateUser(req: Request, res: Response) {
    const user = req.body;
    const id = req.params.id;

    User.update(user, { where: { id } })
      .then((data: any) => res.json(data))
      .catch((err: Error) => res.sendStatus(500).send(err));
  }
}
