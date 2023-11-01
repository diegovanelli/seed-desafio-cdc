import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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
  titulo: string;

  @Prop({
    required: true,
    maxlength: 500,
  })
  resumo: string;

  @Prop()
  sumario: string;

  @Prop({
    required: true,
    min: 20,
  })
  preco: number;

  @Prop({
    required: true,
    min: 100,
  })
  paginas: number;

  @Prop({
    required: true,
    unique: true,
  })
  isbn: string;

  @Prop({
    required: true,
  })
  dataPublicacao: Date;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
  })
  categoria: Categoria;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
  })
  autor: Autor;
}

export const LivroSchema = SchemaFactory.createForClass(Livro);
