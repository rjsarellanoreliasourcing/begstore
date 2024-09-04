import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  pasword: string;
}

export default User;
