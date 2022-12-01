import { Kernel } from './cub.core';
import { IServices } from '@util/shared/interface';
import express from 'express';
import { AppBaseService } from '@core/services/app';
import { API_VERSION } from '@util/enum/common';
import basicAuth from '@util/auth/basicAuth';
import twoFactor from '@util/auth/twoFactor';
import { logger } from '@util/logger/logger';
import { coreService } from '@core/services';

interface ICubiServiceModule {
  registerCommonServices(
    services: express.Application,
    version: API_VERSION
  ): void;
}

export class CubiServiceModule extends Kernel implements ICubiServiceModule {
  registerCommonServices(
    services: express.Application,
    version: API_VERSION
  ): void {
    if (version === API_VERSION.V1) {
      logger.info('init router');
      coreService.forEach((_ct: IServices) => {
        services.use(`/${version}/`, basicAuth, twoFactor, _ct.r);
      });
    }
  }
}
