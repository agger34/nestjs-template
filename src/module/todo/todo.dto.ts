import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Todo } from './todo.interface';
import { TodoStatus } from './todo.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto implements Partial<Todo> {
  @ApiProperty({
    description: 'The title of a todo',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    description: 'The description of a todo',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly description: string;
}

export class UpdateTodoDto implements Partial<Todo> {
  @ApiProperty({
    description: 'The title of a todo',
    required: false,
  })
  @IsString()
  @IsOptional()
  readonly title?: string;

  @ApiProperty({
    description: 'The description of a todo',
    required: false,
  })
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({
    description: 'The status of a todo',
    required: true,
    enum: TodoStatus,
  })
  @ApiProperty()
  @IsEnum(TodoStatus)
  status: TodoStatus;
}

export class ResponseTodoDto implements Partial<Todo> {
  @ApiProperty({
    description: 'The title of a todo',
    required: false,
  })
  title: string;

  @ApiProperty({
    description: 'The description of a todo',
    required: false,
  })
  description: string;

  @ApiProperty({
    description: 'The status of a todo',
    enum: TodoStatus,
  })
  status: TodoStatus;

  @ApiProperty({
    description: 'The createdAt of a todo',
    required: false,
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The updatedAt of a todo',
    required: false,
  })
  updatedAt: Date;
}
