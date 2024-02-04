import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, MaxLength, Validate } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { IsValueUniqueValidator } from 'src/validators/value-unique.validator';
import { AutorService } from '../autor.service';

export type AutorDodument = HydratedDocument<Autor>;

@Schema()
export class Autor {
  @Prop({ required: true })
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  nome: string;

  @Prop({ required: true, unique: true })
  @IsNotEmpty({ message: 'Email é obrigatório.' })
  @IsEmail({}, { message: 'Email inválido.' })
  @Validate(IsValueUniqueValidator, [
    AutorService,
    'email',
    'Este email já está sendo usado por outro autor.',
  ])
  email: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'Descrição é obrigatória.' })
  @MaxLength(400, {
    message: 'Descrição não pode ter mais que 400 caracteres.',
  })
  descricao: string;

  @Prop({ default: Date.now })
  instante: Date;
}
export const AutorSchema = SchemaFactory.createForClass(Autor);
