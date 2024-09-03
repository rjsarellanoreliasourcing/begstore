import { IsEmpty, IsString, IsNumber } from 'class-validator';

export class tableDto {
  @IsNumber()
  tableNumber: Number;
  tableCapacity: Number;
  tableAvailability: boolean;
}
