import { Injectable } from '@nestjs/common';
import { version } from 'os';

@Injectable()
export class AppService {
  getHello(){
  const response = {
    success : true,
    data : {
      service : "purchase-api",
      version : "1.0.0"
    },
    message : "Hello NestJS"
  }
  return response;
  }
  }

