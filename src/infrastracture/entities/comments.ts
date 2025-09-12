import { Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from './user';
import { BlogEntity } from './blog';

export class CommentEntity {
  @Column({ primary: true })
  id: string;

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

  @ManyToOne(() => CommentEntity, (comment) => comment.children, {
    nullable: true,
  })
  @JoinColumn({ name: 'parentId' })
  parent: CommentEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.parent)
  children: CommentEntity[];
}
