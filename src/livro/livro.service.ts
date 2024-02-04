import { Injectable } from '@nestjs/common';
import { Livro } from './schemas/livro.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LivroService {
  constructor(@InjectModel(Livro.name) private livroModel: Model<Livro>) {}

  async create(livro: Livro): Promise<Livro> {
    const livroCriado = new this.livroModel(livro);
    return await livroCriado.save();
  }

  async findAll(): Promise<Livro[]> {
    return this.livroModel.find().exec();
  }
}
