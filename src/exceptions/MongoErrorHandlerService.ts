import { Injectable } from '@nestjs/common';
import { MongoError } from 'mongodb';
import { UniqueConstraintException } from './UniqueConstraintException';

@Injectable()
export class MongoErrorHandlerService {
  handleMongoError(error: MongoError): void {
    if (error.code === 11000) {
      const field = error.message.split('index: ')[1].split(' dup key')[0];
      const value = RegExp(/"([^"]+)"/).exec(error.message)[1];
      throw new UniqueConstraintException(field, value);
    } else {
      console.error('Erro do MongoDB:', error.message);
    }
  }
}
