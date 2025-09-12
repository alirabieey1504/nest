import { Column, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user';
import { BlogEntity } from './blog';

export class CommentEntity {
  @Column()
  text: string;

  @Column()
  createdAt: Date;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.comment)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Column()
  blogId: string;

  @ManyToOne(() => BlogEntity, (blog) => blog.comment)
  @JoinColumn({ name: 'blogId' })
  blog: BlogEntity;
}
