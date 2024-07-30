import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Table {
  @Prop()
  tableNumber: string;

  @Prop()
  tableCapacity: Number;
}
export const tableSchema = SchemaFactory.createForClass(Table);
