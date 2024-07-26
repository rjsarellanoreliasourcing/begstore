import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'


@Schema()

export class User {
@Prop()
username: string

@Prop()
displayName: string

}

export const UserSchema = SchemaFactory.createForClass(User) 