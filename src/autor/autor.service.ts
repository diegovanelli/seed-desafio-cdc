import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Autor } from 'src/autor/schemas/autor.schema';
import { Model } from 'mongoose';
import { UniqueConstraintException } from 'src/exceptions/UniqueConstraint.exception';

@Injectable()
export class AutorService {
  constructor(@InjectModel(Autor.name) private autorModel: Model<Autor>) {}

  async create(createAutorDto: CreateAutorDto): Promise<Autor> {
    try {
      const autorCriado = new this.autorModel(createAutorDto);
      return await autorCriado.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new UniqueConstraintException('email', createAutorDto.email);
      } else {
        console.error('Erro do MongoDB:', error.message);
      }
    }
  }

  async findAll(): Promise<Autor[]> {
    return this.autorModel.find().exec();
  }

  findOne(id: string) {
    return this.autorModel.findById(id).exec();
  }

  async update(id: string, updateAutorDto: UpdateAutorDto) {
    console.info(updateAutorDto);
    const autorAlterado = new this.autorModel(updateAutorDto);
    await autorAlterado.updateOne({ _id: id });
    return `This action updates a #${id} autor`;
  }

  async remove(id: string) {
    await this.autorModel.deleteOne({ _id: id });
    return `This action removes a #${id} autor`;
  }
}
