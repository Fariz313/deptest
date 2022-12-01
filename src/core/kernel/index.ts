import { CubAppUse } from './cub.app.use';
import { CubiServiceModule } from './cub.service.module';
import { CubiStorage, QueryProxy } from './cub.storage';
import { CubiCacheManager } from './cub.cache';
import { Kernel } from './cub.core';

export * from './cub.app.use';
export * from './cub.service.module';
export * from './cub.storage';
export * from './cub.cache';
export * from './cub.core';

export default {
  use: CubAppUse,
  queryproxy: QueryProxy,
  core: Kernel,
  service: CubiServiceModule,
  storage: CubiStorage,
  cache: CubiCacheManager
};
