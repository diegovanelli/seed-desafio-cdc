import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categoria } from './schemas/categoria.schema';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectModel(Categoria.name) private categoriaModel: Model<Categoria>,
  ) {}

  async create(categoria: Categoria): Promise<Categoria> {
    const categoriaCriada = new this.categoriaModel(categoria);
    return await categoriaCriada.save();
  }

  async findAll(): Promise<Categoria[]> {
    return this.categoriaModel.find().exec();
  }
}
