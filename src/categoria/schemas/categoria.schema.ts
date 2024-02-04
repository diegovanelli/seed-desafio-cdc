import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, Validate } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { CategoriaService } from '../categoria.service';
import { IsValueUniqueValidator } from 'src/validators/value-unique.validator';

export type CategoriaDocument = HydratedDocument<Categoria>;

@Schema()
export class Categoria {
  @Prop({
    require: true,
    unique: true,
  })
  @IsNotEmpty({
    message: 'Nome é obrigátorio.',
  })
  @Validate(IsValueUniqueValidator, [
    CategoriaService,
    'nome',
    'Este nome já está sendo usado por outra categoria.',
  ])
  nome: string;
}
export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
