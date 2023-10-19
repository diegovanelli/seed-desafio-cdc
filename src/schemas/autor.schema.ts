import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, Max } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type AutorDodument = HydratedDocument<Autor>;

@Schema()
export class Autor {
  @Prop()
  @IsNotEmpty({
    message: 'Nome é obrigatório.',
  })
  nome: string;

  @Prop()
  @IsEmail(
    {},
    {
      message: 'Email precisa ser um endereço de email válido.',
    },
  )
  @IsNotEmpty({
    message: 'Email é obrigatório.',
  })
  email: string;

  @Prop()
  @IsNotEmpty({
    message: 'Descricao é obrigatório.',
  })
  @Max(400)
  descricao: string;

  @Prop({ default: Date.now })
  instante: Date;
}
export const AutorSchema = SchemaFactory.createForClass(Autor);
