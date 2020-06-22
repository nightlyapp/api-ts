import { FastInfoPub } from "../models/FastInfoPub";
import { Request, Response } from "express";

export class FastInfoPubController {
  public index(req: Request, res: Response) {
    FastInfoPub.findAll<FastInfoPub>()
      .then((pubs: FastInfoPub[]) => res.json(pubs))
      .catch((err: Error) => res.status(500).send(err));
  }

  public getFastInfoPub(req: Request, res: Response) {
    const id = req.params.id;
    console.log(id);
    FastInfoPub.findOne({ where: { id } })
      .then((FastInfoPub) => res.json(FastInfoPub))
      .catch((err: Error) => res.status(500).send(err));
  }

  public postFastInfoPub(req: Request, res: Response) {
    FastInfoPub.create(req.body)
      .then((FastInfoPub: FastInfoPub) => {
        res.json(FastInfoPub);
      })
      .catch((err: Error) => res.status(500).send(err));
  }

  public updateFastInfoPub(req: Request, res: Response) {
    const FastInfoPub = req.body;
    const id = req.params.id;

    FastInfoPub.update(FastInfoPub, { where: { id } })
      .then((data: any) => res.json(data))
      .catch((err: Error) => res.status(500).send(err));
  }
}
