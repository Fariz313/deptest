import express from 'express';
import { CONFIG } from '@util/config/config';
import { logger } from '@util/logger/logger';
import { CubAppUse } from './cub.app.use';

export class Kernel {
  config: any;
  dbUrl: string;
  defaultServices: express.Application;
  appUse: CubAppUse;

  constructor() {

    this.defaultServices = express();
    this.appUse = new CubAppUse(this.defaultServices);
    this.config = CONFIG;
    this.dbUrl = CONFIG.MONGO_DB_URL;
  }

  appService() {
    console.log(this.config);
    this.defaultServices.listen(this.config.PORT, () => {
      logger.info(`run on ${this.config.APP_ENV ?? 'development'}`);
      logger.info(
        `Server Started!, running app: ${this.config.NAME} Express: http://localhost:${this.config.PORT}`
      );
    });
  }
}
