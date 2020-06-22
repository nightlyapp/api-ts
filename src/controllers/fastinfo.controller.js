"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastInfoController = void 0;
const FastInfo_1 = require("../models/FastInfo");
class FastInfoController {
    index(req, res) {
        FastInfo_1.FastInfo.findAll()
            .then((fastInfos) => res.json(fastInfos))
            .catch((err) => res.status(500).send(err));
    }
    getFastInfo(req, res) {
        const id = req.params.id;
        console.log(id);
        FastInfo_1.FastInfo.findOne({ where: { id } })
            .then((FastInfo) => res.json(FastInfo))
            .catch((err) => res.status(500).send(err));
    }
    postFastInfo(req, res) {
        FastInfo_1.FastInfo.create(req.body)
            .then((FastInfo) => {
            res.json(FastInfo);
        })
            .catch((err) => res.status(500).send(err));
    }
    updateFastInfo(req, res) {
        const FastInfo = req.body;
        const id = req.params.id;
        FastInfo.update(FastInfo, { where: { id } })
            .then((data) => res.json(data))
            .catch((err) => res.status(500).send(err));
    }
}
exports.FastInfoController = FastInfoController;
