"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastInfoPubController = void 0;
const FastInfoPub_1 = require("../models/FastInfoPub");
class FastInfoPubController {
    index(req, res) {
        FastInfoPub_1.FastInfoPub.findAll()
            .then((pubs) => res.json(pubs))
            .catch((err) => res.status(500).send(err));
    }
    getFastInfoPub(req, res) {
        const id = req.params.id;
        console.log(id);
        FastInfoPub_1.FastInfoPub.findOne({ where: { id } })
            .then((FastInfoPub) => res.json(FastInfoPub))
            .catch((err) => res.status(500).send(err));
    }
    postFastInfoPub(req, res) {
        FastInfoPub_1.FastInfoPub.create(req.body)
            .then((FastInfoPub) => {
            res.json(FastInfoPub);
        })
            .catch((err) => res.status(500).send(err));
    }
    updateFastInfoPub(req, res) {
        const FastInfoPub = req.body;
        const id = req.params.id;
        FastInfoPub.update(FastInfoPub, { where: { id } })
            .then((data) => res.json(data))
            .catch((err) => res.status(500).send(err));
    }
}
exports.FastInfoPubController = FastInfoPubController;
