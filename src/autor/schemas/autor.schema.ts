import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AutorDodument = HydratedDocument<Autor>;

@Schema()
export class Autor {
  @Prop({ required: true })
  nome: string;

  @Prop({ unique: true })
  email: string;

  @Prop({
    required: true,
    maxlength: 400,
  })
  descricao: string;

  @Prop({ default: Date.now })
  instante: Date;
}
export const AutorSchema = SchemaFactory.createForClass(Autor);
