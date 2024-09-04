import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PrimaryGeneratedColumn } from 'typeorm';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @PrimaryGeneratedColumn()
  userEmail: string;

  @Prop()
  username: string;

  @Prop()
  displayName: string;

  @Prop()
  mobileNumber: Number;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
