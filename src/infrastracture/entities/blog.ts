import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { UserEntity } from './user';
import { CommentEntity } from './comments';

@Entity('blog')
export class BlogEntity {
  @Column({ primary: true })
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

  @Column()
  countView: number;

  @OneToMany(() => CommentEntity, (comment) => comment.blog)
  comment: CommentEntity[];
}
