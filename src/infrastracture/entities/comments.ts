import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { UserEntity } from './user';
import { BlogEntity } from './blog';

@Entity('comment')
export class CommentEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  text: string;

  @Column()
  createdAt: Date;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Column()
  blogId: string;

  @ManyToOne(() => BlogEntity, (blog) => blog.comments)
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
