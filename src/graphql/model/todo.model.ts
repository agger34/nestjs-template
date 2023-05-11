import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { TodoStatus } from 'src/module/todo/todo.enum';
import { ITodo } from 'src/module/todo/todo.interface';

@ObjectType()
export class TodoModel implements Partial<ITodo> {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  status: TodoStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class CreateTodoModel implements Partial<ITodo> {
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
