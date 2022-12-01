import QueryProxy from '@core/kernel/cub.storage';
import { IUser, User } from '@core/model/user';
import { LocationBaseWorker } from '@core/worker/location/locationBaseWorker';
import { CONFIG } from '@util/config/config';
import { APISTATUS } from '@util/enum';
import { HttpOutput } from '@util/shared/httpOutput';
import { ILooseObject } from '@util/shared/interface/ILooseObject';

import express from 'express';
import * as jwt from 'jsonwebtoken';



export default async function tokenized(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const token =
    (req.headers['x-access-token'] as string) ||
    (req.headers['x-cub-token'] as string);
  const source = req.headers['x-source-channel']
    ? req.headers['x-source-channel']
    : '';
  const access = req.headers['x-cub-header']
    ? (req.headers['x-cub-header'] as string)
    : '';
  if (token) {
    jwt.verify(
      token,
      CONFIG.JWT_SECRET_SIGN,
      (_err: any, _result: ILooseObject) => {
        if (_err) {
          return unauthorized(res);
        }
        const params: ILooseObject = {};
        params.filter = '-password';
        params.populate = '';
        const query = new QueryProxy(User);
        const exec = query.findById(_result._id, params);
        const locationBaseWorker =  new LocationBaseWorker();
        exec.then(async (data: IUser) => {
          if (!data) {
            return unauthorized(res);
          }
          let invokedData:ILooseObject = data;
          
          let userLocation =  await locationBaseWorker.getVillage(data.location);
          invokedData.location = userLocation.length?userLocation[0]:data.location;
          // console.log(invokedData);
          req.api = {};
          req.api.user = invokedData;
          return next();
        });
        exec.catch((err: Error) => {
          return unauthorized(res);
        });
      }
    );
  } else {
    return unauthorized(res);
  }
}

function unauthorized(res: express.Response) {
  return res
    .status(401)
    .send(
      new HttpOutput(
        APISTATUS.ERROR,
        APISTATUS.STATUS_AUTH_NOT_AUTHORIZED_MESSAGE,
        {},
        null,
        null,
        {}
      )
    );
}
