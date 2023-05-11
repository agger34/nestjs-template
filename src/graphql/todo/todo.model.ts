import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { ITodo } from 'src/module/todo/todo.interface';

@ObjectType({ description: 'todo ' })
export class TodoModel {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class CreateTodoModel implements Partial<ITodo> {
  @Field()
  readonly title: string;

  @Field()
  readonly description: string;
}
