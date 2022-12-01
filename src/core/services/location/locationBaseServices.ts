import { APISTATUS } from '@util/enum';
import { IServices } from '@util/shared/interface/IServices';
import express from 'express';
import { HttpOutput } from '@util/shared/httpOutput';
import { LocationBaseWorker } from '@core/worker/location/locationBaseWorker';

export class LocationBaseService implements IServices {
  path = '/location/base';
  r = express.Router();
  locationBaseWorker?: LocationBaseWorker;

  constructor() {
    this.locationBaseWorker = new LocationBaseWorker();
    this.initRouter();
  }
  
  private initRouter() {
    this.r.get(`${this.path}/province/all`, this.provinceAll);
    this.r.get(`${this.path}/province/detail/:id`, this.provinceDetail);
    this.r.get(`${this.path}/regency/detail/:id`, this.regencyDetail);
    this.r.get(`${this.path}/district/detail/:id`, this.districtDetail);
    this.r.get(`${this.path}/village/detail/:id`, this.villageDetail);
    this.r.get(`${this.path}/station/generate`, this.stationGenerate);
  }

  private stationGenerate = async (
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
          null,
          null,
          null,
          {}
        )
      );
  };

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
          await this.locationBaseWorker.getAllProvince(),
          null,
          null,
          {}
        )
      );
  };
  private provinceDetail = async (
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
          await this.locationBaseWorker.getProvinceDetail(Number(req.params.id),true),
          null,
          null,
          {}
        )
      );
  };
  private regencyDetail = async (
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
          await this.locationBaseWorker.getRegency(Number(req.params.id)),
          null,
          null,
          {}
        )
      );
  };
  private districtDetail = async (
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
          await this.locationBaseWorker.getDistrict(Number(req.params.id)),
          null,
          null,
          {}
        )
      );
  };
  private villageDetail = async (
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
          await this.locationBaseWorker.getVillage(Number(req.params.id)),
          null,
          null,
          {}
        )
      );
  };

}
