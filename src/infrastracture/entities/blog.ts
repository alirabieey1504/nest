import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { UserEntity } from './user';
import { CommentEntity } from './comments';

@Entity('blog')
export class BlogEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;
  @Column()
  description: string;

  @Column()
  createdat: Date;

  @Column()
  authorId: string;

  @ManyToOne(() => UserEntity, (user) => user.blogs)
  @JoinColumn({ name: 'authorId' })
  author: UserEntity;

  @Column()
  countView: number;

  @OneToMany(() => CommentEntity, (comment) => comment.blog)
  comments: CommentEntity[];
}
