import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Autor, AutorSchema } from 'src/autor/schemas/autor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Autor.name, schema: AutorSchema }]),
  ],
  controllers: [AutorController],
  providers: [AutorService],
})
export class AutorModule {}
