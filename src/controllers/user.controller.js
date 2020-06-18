"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../models/User");
class UserController {
    index(req, res) {
        User_1.User.findAll({})
            .then((users) => res.json(users))
            .catch((err) => res.sendStatus(500).send(err));
    }
    getUser(req, res) {
        const id = req.params.id;
        User_1.User.findOne({ where: { id } })
            .then((user) => {
            res.json(user);
        })
            .catch((err) => res.sendStatus(500).send(err));
    }
    postUser(req, res) {
        const user = req.body;
        User_1.User.create(user)
            .then((data) => res.json(data))
            .catch((err) => res.sendStatus(500).send(err));
    }
    updateUser(req, res) {
        const user = req.body;
        const id = req.params.id;
        User_1.User.update(user, { where: { id } })
            .then((data) => res.json(data))
            .catch((err) => res.sendStatus(500).send(err));
    }
}
exports.UserController = UserController;
