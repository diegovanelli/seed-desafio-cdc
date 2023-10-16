import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Autor } from 'src/schemas/autor.schema';
import { Model } from 'mongoose';

@Injectable()
export class AutorService {
  constructor(@InjectModel(Autor.name) private autorModel: Model<Autor>) {}

  create(createAutorDto: CreateAutorDto): Promise<Autor> {
    const autorCriado = new this.autorModel(createAutorDto);
    return autorCriado.save();
  }

  findAll() {
    return `This action returns all autor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autor`;
  }

  update(id: number, updateAutorDto: UpdateAutorDto) {
    return `This action updates a #${id} autor`;
  }

  remove(id: number) {
    return `This action removes a #${id} autor`;
  }
}
