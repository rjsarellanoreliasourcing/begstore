import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { UsersController } from './users/users.controller';
// import { UsersService } from './users/users.service';
import { User, UserSchema } from './schema/user.schema';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
  // exports: [UsersService],
})
export class AppModule {}
