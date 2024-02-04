import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { MongoError } from 'mongodb';

export function handleMongoError(error: MongoError) {
  if (error.code === 11000 || error.code === 11001) {
    // Extract the field name from the error message
    const fieldName = error.message
      .split('index:')[1]
      .split('dup key')[0]
      .trim();
    return new ConflictException(`O campo ${fieldName} deve ser único.`);
  } else {
    // Re-throw the error if it's not related to a duplicate key
    throw new InternalServerErrorException();
  }
}
