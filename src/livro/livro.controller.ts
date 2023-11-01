import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { LivroService } from './livro.service';
import { CreateLivroDto } from './dto/create-livro.dto';

@Controller('livro')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Post()
  @HttpCode(200)
  create(@Body() createLivroDto: CreateLivroDto) {
    return this.livroService.create(createLivroDto);
  }
}
