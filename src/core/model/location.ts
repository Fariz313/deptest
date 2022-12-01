import mongoose from 'mongoose';
const name = 'IndonesiaProvince';

const villageSchema = new mongoose.Schema({
  id: { type: Number, index: true },
  name: String
}).index({ name: 'text' });

const districtSchema = new mongoose.Schema({
  id: { type: Number, index: true },
  name: String,
  villages: [villageSchema]
}).index({ name: 'text' });

const regencySchema = new mongoose.Schema({
  id: { type: Number, index: true },
  name: String,
  districts: [districtSchema]
}).index({ name: 'text' });

const provinceSchema = new mongoose.Schema({
  id: { type: Number, index: true },
  name: String,
  regencies: [regencySchema]
}).index({ name: 'text' });

export const Location = mongoose.model<any>(name, provinceSchema)