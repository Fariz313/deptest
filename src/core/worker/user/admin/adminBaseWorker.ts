import { QueryProxy } from '@core/kernel/cub.storage';
import { User } from '@core/model/user';
import { ILooseObject } from '@util/shared/interface';
import { integer } from 'aws-sdk/clients/cloudfront';
import { UserBaseWorker } from '../userBaseWorker';

export interface IAdminBaseWorker {
  createNewAdmin(user: any, id: String, level: String): Promise<any>;
  assignCurrentUser(user: string, params: ILooseObject): Promise<any>;
  removeCurrentUserFromAdmin(user: string): Promise<any>;
  removeAdmin(user: string): Promise<any>;
  getUser(user: any, query: any, filter: any): Promise<any>;
  updateAdmin(params: ILooseObject): Promise<any>;
}
export class AdminBaseWorker
  extends UserBaseWorker
  implements IAdminBaseWorker
{
  assignCurrentUser(user: string, params: ILooseObject): Promise<any> {
    throw new Error('Method not implemented.');
  }

  removeCurrentUserFromAdmin(user: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  createNewAdmin(user: any, callSign: String, level: String): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        if (user.userLevel == 0) {
          reject('Anda Bukan Admin');
        }
        let data = await this.qp.findOne({ callSign: callSign }, {});
        if (user.userLevel <= 2) {
          if (user.provinsi != data.provinsi) {
            reject('User Diluar Area Anda');
          }
        }
        if (user.userLevel == 1) {
          if (user.kabupaten != data.kabupaten) {
            reject('User Diluar Area Anda');
          }
        }
        this.qp
          .update({ callsign: callSign }, { $set: { userLevel: level } })
          .then((data: any) => {
            resolve(data);
          })
          .catch((err: any) => {
            console.log(err);
            reject(err);
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }


  getUser(user: any, query: any, filter: any): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        if (user.userLevel == 1) {
          filter.kabupaten = user.kabupaten;
        } else if (user.userLevel == 2) {
          filter.provinsi = user.provinsi;
        }
        this.qp
          .findAll(filter, {}, query.skip, query.limit)
          .then((data: any) => {
            resolve(data)
          })
          .catch((err: any) => {
            console.log(err);
            reject(err);
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  removeAdmin(user: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  updateAdmin(params: ILooseObject): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
