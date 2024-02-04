import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { AutorService } from './autor.service';
import { Autor } from './schemas/autor.schema';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createAutor: Autor) {
    return this.autorService.create(createAutor);
  }

  @Get()
  findAll() {
    return this.autorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorService.findOne(id);
  }
}
