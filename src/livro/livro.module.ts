import { Module } from '@nestjs/common';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Livro, LivroSchema } from './schemas/livro.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Livro.name, schema: LivroSchema }]),
  ],
  controllers: [LivroController],
  providers: [LivroService],
})
export class LivroModule {}
