

import Mailgun from 'mailgun-js';
import { CONFIG } from './config/config';

export class Mailler {

  public mailgunInstance = Mailgun({
    apiKey: CONFIG.MAILGUN_API_KEY,
    publicApiKey: CONFIG.MAILGUN_PUBLIC_API_KEY,
    domain: CONFIG.MAILGUN_URL,
    testMode: false
  });

  sendMail(recipient:string, message:string) {
    let data = {
      from: 'Ahmad A <otp@amirlabs.my.id>',
      to: recipient,
      subject: "OTP Verification",
      text: message
    };
    console.log("test")
    console.log(this.mailgunInstance)
    this.mailgunInstance.messages().send(data, (error:any, body:any) => {
      console.log(data)
      console.log('bodyMailgun',body);
      console.log('errMailgun',error);
    });
  }
}
