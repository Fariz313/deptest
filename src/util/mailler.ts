

import mailgun from 'mailgun-js';
import { CONFIG } from './config/config';

export class Mailler {
  APIkey: String;
  domain: String;
  mailgun: any;

  public mailgunInstance = mailgun({
    apiKey: CONFIG.MAILGUN_API_KEY,
    publicApiKey: CONFIG.MAILGUN_PUBLIC_API_KEY,
    domain: CONFIG.MAILGUN_URL,
    testMode: false
  });

  constructor() {
  }
  sendMail(params:any) {
    let data = params;
    this.mailgunInstance.messages().send(data, (error:any, body:any) => {
      console.log(data)
      console.log('bodyMailgun',body);
      console.log('errMailgun',error);
    });
  }
}
