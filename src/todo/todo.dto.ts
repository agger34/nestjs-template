import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Todo } from './todo.interface';
import { TodoStatus } from './todo.enum';

export class CreateTodoDto implements Partial<Todo> {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}

export class UpdateTodoDto implements Partial<Todo> {
  @IsString()
  @IsOptional()
  readonly title?: string;

  @IsNotEmpty()
  @IsOptional()
  readonly description?: string;

  @IsEnum(TodoStatus)
  status: TodoStatus;
}
