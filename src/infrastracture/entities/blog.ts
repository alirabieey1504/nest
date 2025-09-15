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
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  createdAt: Date;

  @Column()
  authorId: string;

  @ManyToOne(() => UserEntity, (user) => user.blogs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'authorId' })
  author: UserEntity;

  @Column()
  countView: number;

  @OneToMany(() => CommentEntity, (comment) => comment.blog)
  comments: CommentEntity[];
}
