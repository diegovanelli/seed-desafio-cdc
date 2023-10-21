import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateAutorDto {
  @IsNotEmpty({
    message: 'Nome é obrigatório.',
  })
  nome: string;

  @IsEmail(
    {},
    {
      message: 'Email precisa ser um endereço de email válido.',
    },
  )
  email: string;

  @IsNotEmpty({
    message: 'Descricao é obrigatório.',
  })
  @MaxLength(400, {
    message: 'Valor máximo de caracteres é 400.',
  })
  @MinLength(10, {
    message: 'Valor minimo de caracteres é 10.',
  })
  descricao: string;
}
