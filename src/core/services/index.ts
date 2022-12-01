import { AppBaseService } from './app';
import { LocationBaseService } from './location/locationBaseServices';
import { StreamBaseService } from './location/streamBaseService';
import { UserAuthenticateService } from './user/authenticateBaseService';
import { UserBaseService } from './user/userBaseService';

export const coreService = [
    new AppBaseService(),
    new LocationBaseService(),
    new StreamBaseService(),
    new UserAuthenticateService(),
    new UserBaseService()
]