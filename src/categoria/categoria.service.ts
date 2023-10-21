import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categoria } from './schemas/categoria.schema';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UniqueConstraintException } from 'src/exceptions/UniqueConstraint.exception';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectModel(Categoria.name) private categoriaModel: Model<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    try {
      const categoriaCriada = new this.categoriaModel(createCategoriaDto);
      return await categoriaCriada.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new UniqueConstraintException('nome', createCategoriaDto.nome);
      } else {
        console.error('Erro do MongoDB:', error.message);
      }
    }
  }
}
