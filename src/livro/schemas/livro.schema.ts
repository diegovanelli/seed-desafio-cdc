import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsDate,
  IsISBN,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinDate,
} from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import { Autor } from 'src/autor/schemas/autor.schema';
import { Categoria } from 'src/categoria/schemas/categoria.schema';

export type LivroDocument = HydratedDocument<Livro>;

@Schema()
export class Livro {
  @Prop({
    required: true,
    unique: true,
  })
  @IsNotEmpty({ message: 'Título é obrigatório.' })
  @IsString({ message: 'Título deve ser uma string.' })
  titulo: string;

  @Prop({
    required: true,
    maxlength: 500,
  })
  @IsNotEmpty({ message: 'Resumo é obrigatório.' })
  @IsString({ message: 'Resumo deve ser uma string.' })
  @IsNotEmpty({ message: 'Resumo não pode estar vazio.' })
  @IsString({ message: 'Resumo deve ser uma string.' })
  @MaxLength(500, { message: 'Resumo deve ter no máximo 500 caracteres.' })
  resumo: string;

  @Prop()
  @IsString({ message: 'Sumário deve ser uma string.' })
  sumario: string;

  @Prop({
    required: true,
    min: 20,
  })
  @IsNotEmpty({ message: 'Preço é obrigatório.' })
  @IsNumber({}, { message: 'Preço deve ser um número.' })
  @Min(20, { message: 'Preço mínimo é de 20.' })
  preco: number;

  @Prop({
    required: true,
    min: 100,
  })
  @IsNotEmpty({ message: 'Número de páginas é obrigatório.' })
  @IsNumber({}, { message: 'Número de páginas deve ser um número.' })
  @Min(100, { message: 'Número de páginas mínimo é de 100.' })
  paginas: number;

  @Prop({
    required: true,
    unique: true,
  })
  @IsNotEmpty({ message: 'ISBN é obrigatório.' })
  @IsString({ message: 'ISBN deve ser uma string.' })
  @IsISBN(13, { message: 'ISBN inválido.' })
  isbn: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty({ message: 'Data de publicação é obrigatória.' })
  @IsDate({ message: 'Data de publicação inválida.' })
  @MinDate(new Date(), { message: 'Data de publicação deve ser no futuro.' })
  dataPublicacao: Date;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
  })
  @IsNotEmpty({ message: 'Categoria é obrigatória.' })
  categoria: Categoria;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
  })
  @IsNotEmpty({ message: 'Autor é obrigatório.' })
  autor: Autor;
}

export const LivroSchema = SchemaFactory.createForClass(Livro);
