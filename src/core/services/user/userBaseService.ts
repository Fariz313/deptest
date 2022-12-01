import { AdminBaseWorker } from '@core/worker/user/admin/adminBaseWorker';
import tokenized from '@util/auth/tokenized';
import { APISTATUS } from '@util/enum';
import { HttpOutput } from '@util/shared/httpOutput';
import { IServices } from '@util/shared/interface/IServices';
import express from 'express';
import moment from 'moment';

export class UserBaseService implements IServices {
  path = '/user';
  r = express.Router();
  adminBaseWorker: AdminBaseWorker;
  constructor() {
    this.initRouter();
    this.adminBaseWorker = new AdminBaseWorker();
  }
  private initRouter() {
    this.r.post(`${this.path}/admin`, tokenized, this.createNewAdmin);
    this.r.get(`${this.path}/admin`, tokenized, this.getUser);
  }

  

  private createNewAdmin = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    this.adminBaseWorker
      .createNewAdmin(req.api.user,req.body.callSign, req.body.level)
      .then((data: any) => {
        return res
          .status(200)
          .send(
            new HttpOutput(
              APISTATUS.SUCCESS,
              APISTATUS.SUCCESS,
              data,
              null,
              null,
              {}
            )
          );
      });
  };
  private getUser = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    let query:any = {}
    let filter:any = {}
    let user:any = req.api.user
    const page:any = req.query.page ?? 1
    query.limit = req.query.limit ?? 10
    query.skip = query.limit * (page-1)
    if(req.query.name){
      filter.name = { $regex: '.*' + req.query.name + '.*' }
    }
    if(req.query.provinsi && user.userLevel>2){
      filter.provinsi = { $regex: '.*' + req.query.provinsi + '.*' }
    }if(req.query.kabupaten && user.userLevel>1){
      filter.kabupaten = { $regex: '.*' + req.query.kabupaten + '.*' }
    }if(req.query.admin=="1"){
      filter.userLevel = {$gte:1,$lte:user.userLevel}
    }if(req.query.tanggal_terbit){
      const tanggal_terbit:any = req.query.tanggal_terbit
      filter.tanggal_terbit = new Date(tanggal_terbit)
    }if(req.query.callsign){
      filter.callsign = req.query.callsign
    }if(req.query.masa_laku){
      const masa_laku:any = req.query.masa_laku
      filter.masa_laku = new Date(masa_laku)
    }
    this.adminBaseWorker.getUser(user, query, filter).then((data: any) => {
      return res
        .status(200)
        .send(
          new HttpOutput(
            APISTATUS.SUCCESS,
            APISTATUS.SUCCESS,
            data,
            null,
            null,
          )
        );
    });
  };
}
