import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AutorDodument = HydratedDocument<Autor>;

@Schema()
export class Autor {
  @Prop()
  nome: string;

  @Prop()
  email: string;

  @Prop()
  descricao: string;
}
export const AutorSchema = SchemaFactory.createForClass(Autor);
