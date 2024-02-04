import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './schemas/categoria.schema';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  @HttpCode(201)
  create(@Body() categoria: Categoria) {
    return this.categoriaService.create(categoria);
  }

  @Get()
  async findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }
}
