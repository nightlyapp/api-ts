"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubController = void 0;
const Pub_1 = require("../models/Pub");
const Geolocation_1 = require("../models/Geolocation");
class PubController {
    index(req, res) {
        Pub_1.Pub.findAll({ include: [Geolocation_1.Geolocation] })
            .then((pubs) => res.json(pubs))
            .catch((err) => res.sendStatus(500).send(err));
    }
    getPub(req, res) {
        const id = req.params.id;
        Pub_1.Pub.findOne({ where: { id } })
            .then((pub) => res.json(pub))
            .catch((err) => res.sendStatus(500).send(err));
    }
    postPub(req, res) {
        Pub_1.Pub.create(req.body, { include: [Geolocation_1.Geolocation] })
            .then((pub) => {
            res.json(pub);
        })
            .catch((err) => res.sendStatus(500).send(err));
    }
    updatePub(req, res) {
        const pub = req.body;
        const id = req.params.id;
        Pub_1.Pub.update(pub, { where: { id } })
            .then((data) => res.json(data))
            .catch((err) => res.sendStatus(500).send(err));
    }
}
exports.PubController = PubController;
