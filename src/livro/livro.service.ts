import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Livro } from './schemas/livro.schema';
import { Model, Types } from 'mongoose';
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

  async findOne(id: string): Promise<Livro> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`ID inválido: ${id}`);
    }
    const livro = await this.livroModel.findById(id).exec();
    if (!livro) {
      throw new NotFoundException(`Livro com o ID ${id} não encontrado.`);
    }
    return livro;
  }
}
