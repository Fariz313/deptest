import { ILooseObject } from './../../../util/shared/interface/ILooseObject';
import { UserBaseWorker } from '@core/worker/user/userBaseWorker';
import UserCredentialsWorker from '@core/worker/user/userCredentialsWorker';
import tokenized from '@util/auth/tokenized';
import { APISTATUS } from '@util/enum/common';
import { HttpOutput } from '@util/shared/httpOutput';
import { IServices } from '@util/shared/interface';
import express from 'express';

export class UserAuthenticateService implements IServices {
  path = '/user/auth';
  r = express.Router();
  userAuthBaseWorker: UserCredentialsWorker;
  userBaseWorker: UserBaseWorker;
  constructor() {
    this.userAuthBaseWorker = new UserCredentialsWorker();
    this.userBaseWorker = new UserBaseWorker();
    this.initRouter();
  }

  private initRouter() {
    this.r.post(`${this.path}/login`, this.authenticateUser);
    this.r.post(`${this.path}/changepassword`, tokenized, this.changePassword);
    this.r.post(`${this.path}/forgotpassword`, this.forgotPassword);
    this.r.post(
      `${this.path}/forgotpassword/confirm`,
      this.forgotPasswordConfirm
    );
    this.r.post(`${this.path}/resetpassword`, tokenized, this.resetPassword);
    this.r.post(`${this.path}/updateuserprofile`, tokenized, this.changeUser);
    this.r.get(`${this.path}/me`, tokenized, this.authMe);
    this.r.get(`${this.path}/populate`, tokenized, this.populate);
    this.r.get(`${this.path}/regenerate`, tokenized, this.regenerate);
    this.r.get(
      `${this.path}/regeneratecallsign/:id`,
      tokenized,
      this.regenerateSpecificId
    );
    this.r.post(
      `${this.path}/extendmembership`,
      tokenized,
      this.extendmembership
    );
    this.r.get(
      `${this.path}/extendmembership/status`,
      tokenized,
      this.getCurrentUserExtendingRequest
    );
    this.r.post(
      `${this.path}/admin/create`,
      tokenized,
      this.createAdministrator
    );
    this.r.get(`${this.path}/detail/:id`, tokenized, this.detailUser);
  }
  //createPaymentRequest
  private getCurrentUserExtendingRequest = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    this.userAuthBaseWorker
      .getCurrentUserExtendingRequest(req.api.user._id)
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
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              APISTATUS.ERROR,
              err,
              null,
              null,
              {}
            )
          );
      });
  };
  private extendmembership = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    this.userAuthBaseWorker
      .userExtendingRequest(req.api.user._id, req.body)
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
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              APISTATUS.ERROR,
              err,
              null,
              null,
              {}
            )
          );
      });
  };

  private changeUser = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    let userParams: ILooseObject = {};
    userParams = req.body;
    this.userAuthBaseWorker
      .updateUser(req.api.user._id, req.body)
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
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              APISTATUS.ERROR,
              err,
              null,
              null,
              {}
            )
          );
      });
  };
  private changePassword = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    let userParams: ILooseObject = {};
    userParams = req.body;
    this.userAuthBaseWorker
      .authRequestChangePassword(req.api.user._id, req.body)
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
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              APISTATUS.ERROR,
              err,
              null,
              null,
              {}
            )
          );
      });
  };
  private forgotPassword = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    let userParams: ILooseObject = {};
    userParams = req.body;
    this.userAuthBaseWorker
      .authRequestPasswordRecovery(userParams)
      .then((data: any) => {
        return res
          .status(200)
          .send(
            new HttpOutput(
              APISTATUS.SUCCESS,
              data.message,
              data.data,
              null,
              null,
              {}
            )
          );
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              err.message,
              err.data,
              null,
              null,
              {}
            )
          );
      });
  };
  private forgotPasswordConfirm = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    let userParams: ILooseObject = {};
    userParams = req.body;
    this.userAuthBaseWorker
      .confirmRequestForgotpasswordRecovery(userParams)
      .then((data: any) => {
        return res
          .status(200)
          .send(
            new HttpOutput(
              APISTATUS.SUCCESS,
              data.message,
              data.data,
              null,
              null,
              {}
            )
          );
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              err.message,
              err.data,
              null,
              null,
              {}
            )
          );
      });
  };
  private resetPassword = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    let userParams: ILooseObject = {};
    userParams = req.body;
    this.userAuthBaseWorker
      .resetPassword(userParams, req.api.user)
      .then((data: any) => {
        return res
          .status(200)
          .send(
            new HttpOutput(
              APISTATUS.SUCCESS,
              data.message,
              data.data,
              null,
              null,
              {}
            )
          );
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              err.message,
              err.data,
              null,
              null,
              {}
            )
          );
      });
  };
  private createAdministrator = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    this.userBaseWorker
      .userCreateAdministrator(req.api.user, req.body)
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
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              APISTATUS.ERROR,
              err,
              null,
              null,
              {}
            )
          );
      });
  };

  private authenticateUser = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    this.userAuthBaseWorker
      .authenticateUser(req.body)
      .then((data: any) => {
        return res
          .status(200)
          .send(
            new HttpOutput(
              APISTATUS.SUCCESS,
              data.message,
              data.data,
              null,
              null,
              {}
            )
          );
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              APISTATUS.ERROR,
              err,
              null,
              null,
              {}
            )
          );
      });
  };
  private detailUser = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    this.userBaseWorker
      .userDetail(req.params.id)
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
      })
      .catch((err: any) => {
        return res
          .status(422)
          .send(
            new HttpOutput(
              APISTATUS.ERROR,
              APISTATUS.ERROR,
              err,
              null,
              null,
              {}
            )
          );
      });
  };
  private authMe = async (
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
          req.api.user,
          null,
          null,
          {}
        )
      );
  };
  private populate = async (
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

  private regenerateSpecificId = async (
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

  private regenerate = async (
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
}
