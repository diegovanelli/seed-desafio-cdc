import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createAutorDto: CreateAutorDto) {
    return this.autorService.create(createAutorDto);
  }

  @Get()
  findAll() {
    return this.autorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(204)
  update(@Param('id') id: string, @Body() updateAutorDto: UpdateAutorDto) {
    this.autorService.update(id, updateAutorDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.autorService.remove(id);
  }
}
