import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import { TablesController } from './tables/tables.controller';
import { TablesModule } from './tables/tables.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.9.67'),
    UsersModule,

    TablesModule,

    AuthModule,
  ],
  controllers: [UsersController, TablesController],
  providers: [UsersService],
})
export class AppModule {}
