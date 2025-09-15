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
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  text: string;

  @Column()
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @ManyToOne(() => BlogEntity, (blog) => blog.comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'blogId' })
  blog: BlogEntity;

  @ManyToOne(() => CommentEntity, (comment) => comment.children, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parentId' })
  parent: CommentEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.parent)
  children: CommentEntity[];
}
