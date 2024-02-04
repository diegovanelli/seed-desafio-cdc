import { Controller, Post, Body, Get } from '@nestjs/common';
import { LivroService } from './livro.service';
import { Livro } from './schemas/livro.schema';

@Controller('livro')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Post()
  create(@Body() livro: Livro) {
    return this.livroService.create(livro);
  }

  @Get()
  async findAll(): Promise<Livro[]> {
    return this.livroService.findAll();
  }
}
