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
    MongooseModule.forRoot('mongodb+srv://rjsarellano:5Da7lgkooc123$@rpt.bnqpxht.mongodb.net/'),
    UsersModule,

    TablesModule,

    AuthModule,
  ],
  controllers: [UsersController, TablesController],
  providers: [UsersService],
})
export class AppModule {}
