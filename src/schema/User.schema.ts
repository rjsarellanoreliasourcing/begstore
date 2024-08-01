import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  userId;

  @Prop()
  userEmail: string;

  @Prop()
  username: string;

  @Prop()
  displayName: string;

  @Prop()
  mobileNumber: Number;
}

export const UserSchema = SchemaFactory.createForClass(User);
