import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
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
