import mongoose from 'mongoose';
const name = 'Block';

export interface IBlockModel {
  [x: string]: any;
  _id?: string;
  blockedUser?:string[],
  blockedIdClient?:string[]
}

const blockSchema = new mongoose.Schema({
  blockedUser: [String],
  blockedIDClient: [String]
}).index({ name: 'text' });

export const BlockModel = mongoose.model<any>(name, blockSchema)