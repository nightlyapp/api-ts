import { FastInfo } from "../models/FastInfo";
import { Geolocation } from "../models/Geolocation";
import { Request, Response } from "express";

export class FastInfoController {
  public index(req: Request, res: Response) {
    FastInfo.findAll<FastInfo>()
      .then((fastInfos: FastInfo[]) => res.json(fastInfos))
      .catch((err: Error) => res.status(500).send(err));
  }

  public getFastInfo(req: Request, res: Response) {
    const id = req.params.id;
    console.log(id);
    FastInfo.findOne({ where: { id } })
      .then((FastInfo) => res.json(FastInfo))
      .catch((err: Error) => res.status(500).send(err));
  }

  public postFastInfo(req: Request, res: Response) {
    FastInfo.create(req.body)
      .then((FastInfo: FastInfo) => {
        res.json(FastInfo);
      })
      .catch((err: Error) => res.status(500).send(err));
  }

  public updateFastInfo(req: Request, res: Response) {
    const FastInfo = req.body;
    const id = req.params.id;

    FastInfo.update(FastInfo, { where: { id } })
      .then((data: any) => res.json(data))
      .catch((err: Error) => res.status(500).send(err));
  }
}
