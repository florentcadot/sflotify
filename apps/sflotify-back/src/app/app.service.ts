import { Injectable } from '@nestjs/common';
import {message} from '@sflotify/libs/common'

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message };
  }
}
