import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb://root:root@mongoDataBase:27017/life-helper-db',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
