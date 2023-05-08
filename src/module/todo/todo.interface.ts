import { Document } from 'mongoose';
import { TodoStatus } from './todo.enum';

export interface ITodo extends Document {
  readonly title: string;
  readonly description: string;
  readonly status: TodoStatus;
}
