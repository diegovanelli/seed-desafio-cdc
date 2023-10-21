import { IsNotEmpty } from 'class-validator';

export class CreateCategoriaDto {
  @IsNotEmpty({
    message: 'Nome é obrigátorio.',
  })
  nome: string;
}
