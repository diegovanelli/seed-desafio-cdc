import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';

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
  nome: string;
}
export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
