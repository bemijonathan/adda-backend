import { Response } from "express";

export class FormatResponse {
  sendResponse(res: Response, status: number, data: any) {
    res.status(status).send({
      status: true,
      data: data,
    });
  }
}
