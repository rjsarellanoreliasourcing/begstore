import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Table {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tableNumber: number;

  @Column()
  tableAvailability: boolean;

  @Column()
  tableCapacity: number;
}

export default Table;
