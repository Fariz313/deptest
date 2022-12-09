import { APISTATUS } from '@util/enum';
import express from 'express';
import bcrypt from 'bcrypt-nodejs';

export default async function twoFactor(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (
    (req.path === '/app/ping' ||
      req.path === '/app/stellar' ||
      req.path === '/app/m/hook'||
      req.path === '/user/auth/login' ||
      req.path === '/user/auth/register' ||
      req.path === '/user/auth/verifyotp' ||
      req.path === '/user/auth/updateuserprofile' ||
      req.path === '/user/auth/me' ||
    req.path === '/user/auth/paymenthook')
  ) {
    next();
  } else {
    try {
      const moment = require('moment');
      const tz = require('moment-timezone');
      let hour = moment().tz('Etc/GMT0').format('HH-yy-DD-YYYY');
      let hashed: String;
      const header = req.headers['x-access-tf'];
      await bcrypt.hash(
        hour,
        '$2a$10$H8zAYXg4UHEusCRbJSZ0Gu',
        undefined,
        (err: Error, hash) => {
          if (err) {
            return next(err);
          }
          hashed = hash;
          if (hashed != header) {
            return res
              .status(401)
              .json({ message: APISTATUS.STATUS_BASIC_AUTH_MISSING });
          }
          next();
        }
      );
    } catch (error) {
      return res.status(401).json({ message: 'unexpected-tf' });
    }
  }
}
