import { Pub } from "../models/Pub";
import { Geolocation } from "../models/Geolocation";
import { Request, Response } from "express";

export class PubController {
  public index(req: Request, res: Response) {
    Pub.findAll<Pub>({ include: [Geolocation] })
      .then((pubs: Pub[]) => res.json(pubs))
      .catch((err: Error) => res.sendStatus(500).send(err));
  }

  public getPub(req: Request, res: Response) {
    const id = req.params.id;
    Pub.findOne({ where: { id } })
      .then((pub) => res.json(pub))
      .catch((err: Error) => res.sendStatus(500).send(err));
  }

  public postPub(req: Request, res: Response) {
    Pub.create(req.body, { include: [Geolocation] })
      .then((pub: Pub) => {
        res.json(pub);
      })
      .catch((err: Error) => res.sendStatus(500).send(err));
  }

  public updatePub(req: Request, res: Response) {
    const pub = req.body;
    const id = req.params.id;

    Pub.update(pub, { where: { id } })
      .then((data: any) => res.json(data))
      .catch((err: Error) => res.sendStatus(500).send(err));
  }
}
