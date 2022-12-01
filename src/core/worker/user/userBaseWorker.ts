import { QueryProxy } from '@core/kernel/cub.storage';
import { IUser, User } from '@core/model/user';
import { ILooseObject } from '@util/shared/interface';
import { LocationBaseWorker } from '../location/locationBaseWorker';
import { Mailler } from '@util/mailler';
import RootPath from 'app-root-path';
import { IUserV2, UserV2 } from '@core/model/userV2';
import csv from 'csv-parser';
import * as fs from 'fs';
import { CONFIG } from '@util/config/config';
import axios from 'axios';
import { ConfigurationServicePlaceholders } from 'aws-sdk/lib/config_service_placeholders';

interface IUserBaseWorker {
  userDetail(id: string): Promise<any>;
  userOnLocation(params: ILooseObject): Promise<IUser[]>;
}
export class UserBaseWorker implements IUserBaseWorker {
  qp?: QueryProxy;
  qp2?: QueryProxy;
  locationBaseWorker: LocationBaseWorker;
  
  constructor() {
    this.locationBaseWorker = new LocationBaseWorker();
    this.qp = new QueryProxy(User);
    this.qp2 = new QueryProxy(UserV2);
    console.log(this.qp2);
  }
  /**
   * Cannot generate summary
   * @param {string} id - string
   * @returns The user object.
   */

  userDetail(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qp
        .findOne({ _id: id }, {})
        .then(async (data: IUser) => {
          resolve(data);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  }

  userV2CreateUser(userParameter: ILooseObject): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qp2
        .create(userParameter)
        .then((data: any) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  userCreateNewUser(userParameter: ILooseObject): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qp.create(userParameter);
      resolve('A');
    });
  }

  userCreateAdministrator(
    currentUser: ILooseObject,
    userParameter: ILooseObject
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(userParameter);
      let constructParameters = userParameter as ILooseObject;
      constructParameters.manageLocation = {
        level: userParameter.level,
        location: userParameter.location
      };
      console.log(constructParameters);
      this.qp
        .create(constructParameters)
        .then((data: any) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  async updatePaymentStatusForUser(userId: string): Promise<void> {
    let user = (await this.qp.findOne({ _id: userId }, {})) as IUser;
    this.qp.findOneAndUpdate(
      { _id: userId },
      {
        isPaid: true,
        masa_laku: user.masa_laku.setFullYear(user.masa_laku.getFullYear() + 5)
      }
    );
  }
  userLocalFindByCallSign(callSign: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.qp.findOne({ callsign: callSign }, {}).then((data: any) => {
        resolve(data);
      });
    });
  }
  userOnLocation(params: ILooseObject): Promise<IUser[]> {
    return new Promise((resolve, reject) => {});
  }
}
