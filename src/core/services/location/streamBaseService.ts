import { APISTATUS } from '@util/enum';
import { IServices } from '@util/shared/interface/IServices';
import express from 'express';
import { HttpOutput } from '@util/shared/httpOutput';
import { StreamLocationBaseWorker } from '@core/worker/location/streamLocationBaseWorker';

export class StreamBaseService implements IServices {
  path = '/location/stream';
  r = express.Router();
  StreamLocationBaseWorker?: StreamLocationBaseWorker;

  constructor() {
    this.StreamLocationBaseWorker = new StreamLocationBaseWorker();
    this.initRouter();
  }
  
  private initRouter() {
    this.r.get(`${this.path}/province/all`, this.provinceAll);
    this.r.get(`${this.path}/regency/:province_id`, this.regency);
  }

  private provinceAll = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    return res
      .status(200)
      .send(
        new HttpOutput(
          APISTATUS.SUCCESS,
          APISTATUS.SUCCESS,
          await this.StreamLocationBaseWorker.getAllProvince(),
          null,
          null,
          {}
        )
      );
  };
  private regency = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    return res
      .status(200)
      .send(
        new HttpOutput(
          APISTATUS.SUCCESS,
          APISTATUS.SUCCESS,
          await this.StreamLocationBaseWorker.getAllRegency(req.params.province_id),
          null,
          null,
          {}
        )
      );
  };

}
