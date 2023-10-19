import { Module } from '@nestjs/common';
import { AutorModule } from './autor/autor.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING),
    AutorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
