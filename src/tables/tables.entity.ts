import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

class table {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tableNumber: number;

  @Column()
  tableAvailability: boolean;

  @Column()
  tableCapacity: number;
}
