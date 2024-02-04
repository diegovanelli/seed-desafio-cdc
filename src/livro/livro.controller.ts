import { Controller, Post, Body, Get, Param } from '@nestjs/common';
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
  findAll() {
    return this.livroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livroService.findOne(id);
  }
}
