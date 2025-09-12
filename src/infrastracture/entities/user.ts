import { Entity, Column, OneToMany } from 'typeorm';
import { BlogEntity } from './blog';
import { CommentEntity } from './comments';

@Entity('users')
export class UserEntity {
  @Column({ primary: true })
  id: string;

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
  blog: BlogEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comment: CommentEntity;
}
