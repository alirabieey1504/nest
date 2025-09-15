import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { BlogEntity } from './blog';
import { CommentEntity } from './comments';

@Entity('users')
export class UserEntity {
  @PrimaryColumn('uuid')
  id?: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  secretKey: string;

  @OneToMany(() => BlogEntity, (blog) => blog.author)
  blogs: BlogEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity[];
}
