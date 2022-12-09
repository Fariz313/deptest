import { OTP_STATUS } from "@util/enum";
import mongoose from "mongoose";

export interface IOtp {
    _id?: string;
    user_id:string;
    otp:string;
    status: OTP_STATUS
}

const schema = new mongoose.Schema({
    user_id:{
        require : true,
        type:String
    },
    otp:{
        type:String,
        require : true
    },
    status: {
        type:String,
        default:OTP_STATUS.PENDING
    },
    createdAt:{
        type : Date,
        default:Date.now(),
        index:true
    }
})
schema.index({ createdAt: 1 }, {expireAfterSeconds: 1800})

schema.pre('update', function update() {
    this.update(
      {},
      {
        $set: {
            createdAt: Date.now()
        }
      }
    );
  });

export const Otp = mongoose.model<IOtp & mongoose.Document>('Otp', schema);