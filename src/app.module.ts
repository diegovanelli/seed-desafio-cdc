import { Module } from '@nestjs/common';
import { AutorModule } from './autor/autor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriaModule } from './categoria/categoria.module';
import { LivroModule } from './livro/livro.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING),
    AutorModule,
    CategoriaModule,
    LivroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
