import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user';
@Entity('blog')
export class BlogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  createdat: Date;
  @Column()
  authorId: string;
  @ManyToOne(() => UserEntity, (user) => user.blog)
  @JoinColumn({ name: 'authorId' })
  author: UserEntity;
}
