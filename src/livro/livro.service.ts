import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { Livro } from './schemas/livro.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UniqueConstraintException } from 'src/exceptions/UniqueConstraint.exception';

@Injectable()
export class LivroService {
  constructor(@InjectModel(Livro.name) private livroModel: Model<Livro>) {}

  async create(createLivroDto: CreateLivroDto): Promise<Livro> {
    try {
      const livroCriado = new this.livroModel(createLivroDto);
      return await livroCriado.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new UniqueConstraintException(
          'Titulo e ISBN',
          `${createLivroDto.titulo} e ${createLivroDto.isbn}`,
        );
      } else {
        console.error('Erro do MongoDB', error.message);
      }
    }
  }
}
