import { Document } from 'mongoose';
import { TodoStatus } from './todo.enum';

export interface Todo extends Document {
  readonly title: string;
  readonly description: string;
  readonly status: TodoStatus;
}
