import { Request, Response } from "express";

export class ImageController {
  public index(req: Request, res: Response) {
    console.log(req.body);
    return false;
  }
}
