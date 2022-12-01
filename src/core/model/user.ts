import { CONFIG } from '@util/config/config';
import { logger } from '@util/logger/logger';
import bcrypt from 'bcrypt-nodejs';
import crypto from 'crypto';
import mongoose from 'mongoose';
const SALT_WORK_FACTOR = 10;
type comparePasswordFunction = (
  candidatePassword: string,
  cb: (err: any, isMatch: any) => {}
) => void;

export interface IUser {
  [x: string]: any;
  _id?: string;
  nri?: string;
  kta?: string;
  photo?: string;
  postal?: number;
  ktp?: string;
  pn?: string;
  ttl?: string;
  agama?: number;
  gender?: number;
  work?: number;
  address?: string;
  disable?: boolean;
  iarEndDate?: number;
  name?: string;
  status?:number,
  password?: string;
  location: any;
  userLevel?: number;
  callsign?: string;
  tanggal_terbit?: Date;
  masa_laku?: Date;
  id_client?: string;
  email?: string;
  iar?: string;
  nama_lengkap?: string;
  jenis_kelamin?: string;
  kewarganegaraan?: string;
  provinsi?: string;
  kabupaten?: string;
  foto?: string;
  status_callsign?: string;
  tipe_iar?: string;
  manageLocation?: {
    level: number;
    location: Number;
  };
  isSync?:boolean;
  isUpdatedMasaLaku?:boolean
  isPaid?: boolean;

  
  no_hp:                 string;
  jabatan_pekerjaan:     string;
  status_keanggotaan:    string;
  no_kta:                string;
  masa_laku_kta:         string;
  callsign_negara_asal:  null;
  iar_negara_asal:       null;
  masa_laku_negara_asal: null;
  jenis_permohonan:      string;

}
export type UserDocument = mongoose.Document & {
  [x: string]: any;
  _id?: string;
  email?: string;
  postal?: number;
  nri?: string;
  kta?: string;
  ktp?: string;
  pn?: string;
  photo?: string;
  ttl?: string;
  agama?: number;
  gender?: number;
  work?: number;
  address?: string;
  disable?: boolean;
  iarEndDate?: number;
  name?: string;
  iar?: string;
  password?: string;
  userLevel?: number;
  callsign?: string;
  tanggal_terbit?: Date;
  masa_laku?: Date;
  id_client?: string;
  nama_lengkap?: string;
  nama_kta?: string;
  jenis_kelamin?: string;
  kewarganegaraan?: string;
  provinsi?: string;
  kabupaten?: string;
  foto?: string;
  status_callsign?: string;
  tipe_iar?: string;
  isChangePassword?:Boolean,
  isCompletingProfile?:Boolean,
  location: Number;
  manageLocation?: {
    station?: mongoose.Types.ObjectId;
    level: Number;
    location: Number;
  };
  isSync:boolean;
  isPaid: boolean;
  createdAt: Date;
  isUpdatedMasaLaku?:boolean
  updatedAt: Date;

  no_hp:                 string;
  jabatan_pekerjaan:     string;
  status_keanggotaan:    string;
  no_kta:                string;
  masa_laku_kta:         string;
  callsign_negara_asal:  null;
  iar_negara_asal:       null;
  masa_laku_negara_asal: null;
  jenis_permohonan:      string;
};

const schema = new mongoose.Schema({
  email: {
    type: String
  },
  photo: String,
  tanggal_terbit: Date,
  masa_laku: Date,
  id_client:{
    type:String,
    unique:false
  },
  nama_lengkap: {
    type: String,
  },
  nama_kta: {
    type: String,
  },
  jenis_kelamin: String,
  kewarganegaraan: {
    type: String,
  },
  provinsi:String,
  kabupaten:String,
  foto:String,
  status_callsign:String,
  tipe_iar:String,
  nri: {
    type: String
  },
  postal: {
    type: Number
  },
  kta: {
    type: String,
    unique: true,
    index: true
  },
  ktp: {
    type: String,
    index: true
  },
  isChangePassword:{
    type:Boolean,
    default:false,
  },
  isCompletingProfile:{
    type:Boolean,
    default:false,
  },
  pn: {
    type: String
  },
  ttl: {
    type: String
  },
  agama: {
    type: String
  },
  work: Number,
  address: String,
  disable: {
    type: Boolean,
    default: false
  },
  isSync:{
    type: Boolean,
    default: false
  },
  iarEndDate: String,
  callsign: String,
  ktaUrl:String,
  callSignUrl:String,
  tagURL:String,
  password: String,
  name: String,
  userLevel: {
    type: Number,
    default: 0
  },
  status: {
    type: Number,
    default: 0 /// specify for user: if status is ordinary user: set ignore :{1 new user, 2, need perpanjangan}
  },
  location: Number,
  manageLocation: {
    level: {
      type: Number,
      default: 0
    },
    location: {
      type: Number,
      default: 0
    }
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  isUpdatedMasaLaku:{
    type: Boolean,
    default: false
  },

  no_hp:                 String,
  jabatan_pekerjaan:     String,
  status_keanggotaan:    String,
  no_kta:                String,
  masa_laku_kta:         String,
  callsign_negara_asal:  String,
  iar_negara_asal:       String,
  masa_laku_negara_asal: String,
  jenis_permohonan:      String,

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now() }
}).index({ name: 'text', callsign: 'text',iar:'text' });

schema.pre('save', function save(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return next(err);
    }
    // tslint:disable-next-line: no-shadowed-variable
    bcrypt.hash(user.password, salt, undefined, (err: Error, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});
schema.pre('update', function update() {
  logger.info('user prehook update called');
  this.update(
    {},
    {
      $set: {
        updatedAt: Date.now()
      }
    }
  );
});

schema.pre('findOneAndUpdate', function () {
  this.update(
    {},
    {
      $set: {
        updatedAt: Date.now()
      }
    }
  );
});

const comparePassword: comparePasswordFunction = function (
  candidatePassword,
  cb
) {
  bcrypt.compare(
    candidatePassword,
    this.password,
    (err: Error, isMatch: boolean) => {
      cb(err, isMatch);
    }
  );
};

schema.methods.comparePassword = comparePassword;

schema.methods.gravatar = function (size: number = 200) {
  const user = this as UserDocument;
  if (!user.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`;
  }
  const md5 = crypto.createHash('md5').update(user.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

export const User = mongoose.model<any>('User', schema);
