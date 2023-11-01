import { IsNotEmpty, MaxLength, Min, MinDate } from 'class-validator';
import { CreateAutorDto } from 'src/autor/dto/create-autor.dto';
import { CreateCategoriaDto } from 'src/categoria/dto/create-categoria.dto';

export class CreateLivroDto {
  @IsNotEmpty({
    message: 'Titulo é obrigatório.',
  })
  titulo: string;

  @IsNotEmpty({
    message: 'Resumo é obrigatório.',
  })
  @MaxLength(400, {
    message: 'Valor máximo de caracteres é 400.',
  })
  resumo: string;

  sumario: string;

  @Min(20, {
    message: 'Preço minimo 20',
  })
  preco: number;

  @IsNotEmpty({
    message: 'Paginas é obrigatório.',
  })
  @Min(100, {
    message: 'Valor minimo de paginas: 100',
  })
  paginas: number;

  @IsNotEmpty({
    message: 'ISBN é obrigatório.',
  })
  isbn: string;

  @MinDate(new Date(), {
    message: 'A data precisa ser maior que a data atual',
  })
  dataPublicacao: Date;

  @IsNotEmpty({
    message: 'Categoria é obrigatório.',
  })
  categoria: CreateCategoriaDto;

  @IsNotEmpty({
    message: 'Autor é obrigatório.',
  })
  autor: CreateAutorDto;
}
