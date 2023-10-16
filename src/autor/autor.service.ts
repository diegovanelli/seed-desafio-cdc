import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Autor } from 'src/schemas/autor.schema';
import { Model } from 'mongoose';

@Injectable()
export class AutorService {
  constructor(@InjectModel(Autor.name) private autorModel: Model<Autor>) {}

  async create(createAutorDto: CreateAutorDto): Promise<Autor> {
    const autorCriado = new this.autorModel(createAutorDto);
    return await autorCriado.save();
  }

  async findAll(): Promise<Autor[]> {
    return this.autorModel.find().exec();
  }

  findOne(id: string) {
    return `This action returns a #${id} autor`;
  }

  async update(id: string, updateAutorDto: UpdateAutorDto) {
    console.info(updateAutorDto);
    const autorAlterado = new this.autorModel(updateAutorDto);
    await autorAlterado.updateOne({ _id: id });
    return `This action updates a #${id} autor`;
  }

  async remove(id: string) {
    console.info(await this.autorModel.deleteOne({ _id: id }));
    return `This action removes a #${id} autor`;
  }
}
