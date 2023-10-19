import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAutorDto {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  descricao: string;
}
