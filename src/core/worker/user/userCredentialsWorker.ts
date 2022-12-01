import { CONFIG } from '@util/config/config';
import { APISTATUS, COMMMON, USER_AUTH } from '@util/enum/common';
import { ILooseObject } from '@util/shared/interface/ILooseObject';
import { IWorkerResponse } from '@util/shared/interface/IWorkerResponse';
import {
  authChangePasswordVRequestValidateSchema,
  authForgotPasswordConfirmationValidateSchema,
  authForgotPasswordRequestValidateSchema,
  authValidateSchema
} from '@util/validator/validator';

import * as jwt from 'jsonwebtoken';
import { logger } from '@util/logger/logger';
import { IUser, User } from '@core/model/user';
import QueryProxy from '@core/kernel/cub.storage';
import axios from 'axios';
import RootPath from 'app-root-path';
import { Mailler } from '@util/mailler';

interface IUserCredentialsWorker {
  userExtendingRequest(user: string, data: any): Promise<any>;
  getCurrentUserExtendingRequest(user: string): Promise<any>;
  authenticateUser(params: any, service?: string): Promise<any>;
  authRequestPasswordRecovery(params: any): Promise<any>;
  authRequestChangePassword(userId: string, params: ILooseObject): Promise<any>;
  confirmRequestForgotpasswordRecovery(params: any): Promise<any>;
  resetPassword(params: any, userA: any): Promise<any>;
  logout(id: ILooseObject): void;
}

class UserCredentialsWorker implements IUserCredentialsWorker {
  qp?: QueryProxy;
  qpb?: QueryProxy;
  qpExtendingMemerbship?: QueryProxy;
  _worker?: IWorkerResponse = {};
  constructor() {
    this.qp = new QueryProxy(User);
  }
  getCurrentUserExtendingRequest(user: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qpExtendingMemerbship
        .findAll({ user: user }, { sort: { createdAt: 1 } })
        .then((data: any) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  userExtendingRequest(user: string, data: any): Promise<any> {
    let userData = data;
    userData.user = user;
    userData.uuid = new Date().getTime();
    return new Promise((resolve, reject) => {
      this.qpExtendingMemerbship
        .create(userData)
        .then((data: any) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  authRequestChangePassword(
    userId: string,
    params: ILooseObject
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let oldPasssword = '';
      let newPassword = '';
      oldPasssword = params.oldPassword;
      newPassword = params.newPassword;

      const u = User.findOne({ _id: userId });
      u.then((user: any) => {
        if (!user) {
          this._worker = {
            message: USER_AUTH.USER_NOT_FOUND,
            data: {}
          };
          return reject(this._worker);
        }
        user.comparePassword(oldPasssword, (err: Error, isMatch: boolean) => {
          console.log(err);
          if (err) {
            this._worker = {
              message: USER_AUTH.USER_CHANGE_PASSWORD_FAILED,
              data: err
            };
            return reject(this._worker);
          }
          if (isMatch) {
            user.password = newPassword;
            user.isChangePassword = true;
            user.save();
            this._worker = {
              message: USER_AUTH.USER_CHANGE_PASSWORD_SUCCESS,
              data: {}
            };
            resolve(this._worker);
          } else {
            this._worker = {
              message: USER_AUTH.USER_OLD_PASSWORD_NOT_MATCH,
              data: {}
            };
            reject(this._worker);
          }
        });
      });
    });
  }
  confirmRequestForgotpasswordRecovery(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const validate =
        authForgotPasswordConfirmationValidateSchema.validate(params);
      const { value, error } = validate;
      const valid = error == null;
      let otp = '';
      let password = '';
      let token = '';
      if (!valid) {
        this._worker = {
          message: APISTATUS.INVALID_REQUEST,
          data: error
        };
        return reject(this._worker);
      }

      password = params.password;
      otp = params.otp;
      token = params.token;

      jwt.verify(
        token,
        CONFIG.JWT_SECRET_SIGN,
        (_err: any, _result: ILooseObject) => {
          if (_err) {
            this._worker = {
              message: COMMMON.TOKEN_NOT_MATCH,
              data: {}
            };
            return reject(this._worker);
          }

          if (otp.toString() !== _result.otp.toString()) {
            this._worker = {
              message: USER_AUTH.USER_OTP_NOT_MATCH,
              data: {}
            };
            return reject(this._worker);
          }
          console.log(_result);
          const u = User.findOne(
            {
              email: _result.email.trim().toLowerCase()
            },
            {}
          );
          u.then((user: IUser) => {
            if (!user) {
              this._worker = {
                message: USER_AUTH.USER_NOT_FOUND,
                data: {}
              };
              reject(this._worker);
            }
            console.log('cp', user);
            user.password = password;
            user.save();
            this._worker = {
              message: USER_AUTH.USER_SUCCCESS_CHANGE_EMAIL,
              data: {}
            };
            resolve(this._worker);
          }).catch((cpError: Error) => {
            console.log('err', cpError);
            this._worker = {
              message: APISTATUS.ERROR,
              data: cpError
            };
            reject(this._worker);
          });
        }
      );
    });
  }
  resetPassword(params: any, userA: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let id = '';
      if (userA.userLevel < 3) {
        this._worker = {
          message: 'Level Anda tidak sesuai',
          data: {}
        };
        return reject(this._worker);
      }

      id = params.id;
      const u = User.findOne(
        {
          _id: id
        },
        {}
      );
      u.then((user: IUser) => {
        if (!user) {
          this._worker = {
            message: USER_AUTH.USER_NOT_FOUND,
            data: {}
          };
          reject(this._worker);
        }
        user.password = user.callsign;
        user.save();
        this._worker = {
          message: USER_AUTH.USER_SUCCCESS_CHANGE_EMAIL,
          data: {}
        };
        resolve(this._worker);
      }).catch((cpError: Error) => {
        console.log('err', cpError);
        this._worker = {
          message: APISTATUS.ERROR,
          data: cpError
        };
        reject(this._worker);
      });
    });
  }
  authRequestPasswordRecovery(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const validate = authForgotPasswordRequestValidateSchema.validate(params);
      const { value, error } = validate;
      const valid = error == null;
      let email = '';

      if (!valid) {
        this._worker = {
          message: APISTATUS.INVALID_REQUEST,
          data: error
        };
        return reject(this._worker);
      }

      email = params.email;
      const q = this.qp.findOne({ email: email.trim().toLowerCase() }, {});

      q.then((userData: IUser) => {
        if (!userData) {
          this._worker = {
            message: USER_AUTH.USER_NOT_FOUND,
            data: {}
          };
          return reject(this._worker);
        } else {
          const otpToken = Math.floor(1000 + Math.random() * 9000);
          const mailler = new Mailler();
          const secretSign = jwt.sign(
            { otp: otpToken, email },
            CONFIG.JWT_SECRET_SIGN
          );
          this._worker = {
            message: USER_AUTH.USER_OTP_SEND,
            data: secretSign
          };
          return resolve(this._worker);
        }
      });

      q.catch((_error: any) => {
        this._worker = {
          message: APISTATUS.ERROR,
          data: {}
        };
        reject(this._worker);
      });
    });
  }
  logout(id: ILooseObject): void {
    // this.cache.deleteKey(
    //   `${CACHEKEY.API_CACHEKEY_USER_TOKEN_}_${id.api.user._id}`
    // );
  }
  authenticateUser(params: any, service?: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let email = '';
      let password = '';

      email = params.email;
      password = params.password;

      const u = User.findOne({ callsign: email.toUpperCase() });

      u.then(async (user: IUser) => {
        if (!user) {
          this._worker = {
            message: USER_AUTH.USER_INVALID_EMAIL_OR_PASSWORD,
            data: {}
          };
          return reject(this._worker);
        }
        console.log('next');
        user.comparePassword(password, (err: Error, isMatch: boolean) => {
          if (err) {
            console.log(err);
            this._worker = {
              message: USER_AUTH.USER_INVALID_EMAIL_OR_PASSWORD,
              data: {}
            };
            return reject(this._worker);
          }
          if (isMatch) {
            if (service && user.accessService) {
              if (!user.accessService.includes(service)) {
                this._worker = {
                  message: APISTATUS.STATUS_AUTH_NOT_AUTHORIZED_MESSAGE,
                  data: {}
                };
                return reject(this._worker);
              }
              this._worker = {
                message: `${USER_AUTH.USER_SUCCESS_AUTHENTICATE} sebagai ${email}`,
                data: {
                  verified: user.verified,
                  token: jwt.sign({ _id: user._id }, CONFIG.JWT_SECRET_SIGN)
                }
              };
              return resolve(this._worker);
            } else {
              this._worker = {
                message: `${USER_AUTH.USER_SUCCESS_AUTHENTICATE} sebagai ${email}`,
                data: {
                  verified: user.verified,
                  token: jwt.sign({ _id: user._id }, CONFIG.JWT_SECRET_SIGN)
                }
              };
              return resolve(this._worker);
            }
          }
          this._worker = {
            message: USER_AUTH.USER_INVALID_EMAIL_OR_PASSWORD,
            data: {}
          };
          return reject(this._worker);
        });
      });
    });
  }
  createNewAdmin(params: ILooseObject, creatorId: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let user = (await this.qp.create(params)) as IUser;
      resolve(user);
    });
  }
  createNewUser(params: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let user = (await this.qp.create(params)) as IUser;
      resolve(user);
    });
  }
  updateUser(userId: string, params: ILooseObject): Promise<any> {
    return new Promise((resolve, reject) => {
      let parameters = params;
      parameters.isCompletingProfile = true;
      this.qp
        .update({ _id: userId }, parameters)
        .then((data: any) => {
          this.qp
            .findOne({ _id: userId }, {})
            .then(async (userData: IUser) => {});
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}

export default UserCredentialsWorker;