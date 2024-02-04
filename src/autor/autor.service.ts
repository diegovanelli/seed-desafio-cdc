import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoError } from 'mongodb';
import { Autor } from 'src/autor/schemas/autor.schema';
import { handleMongoError } from 'src/exceptions/handle-mongo-erro';

@Injectable()
export class AutorService {
  constructor(@InjectModel(Autor.name) private autorModel: Model<Autor>) {}

  async create(autor: Autor): Promise<Autor> {
    try {
      const autorCriado = new this.autorModel(autor);
      return await autorCriado.save();
    } catch (error) {
      if (error instanceof MongoError) {
        throw handleMongoError(error);
      } else {
        // Re-throw the error if it's not a MongoError
        throw error;
      }
    }
  }

  async findAll(): Promise<Autor[]> {
    return this.autorModel.find().exec();
  }

  findOne(id: string) {
    return this.autorModel.findById(id).exec();
  }
}
