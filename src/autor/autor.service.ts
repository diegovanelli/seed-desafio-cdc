import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Autor } from 'src/autor/schemas/autor.schema';

@Injectable()
export class AutorService {
  constructor(@InjectModel(Autor.name) private autorModel: Model<Autor>) {}

  async create(autor: Autor): Promise<Autor> {
    const autorCriado = new this.autorModel(autor);
    return await autorCriado.save();
  }

  async findAll(): Promise<Autor[]> {
    return this.autorModel.find().exec();
  }

  findOne(id: string) {
    return this.autorModel.findById(id).exec();
  }
}
