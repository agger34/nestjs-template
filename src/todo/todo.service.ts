import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  constructor(readonly todoRepository: TodoRepository) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.create(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  async findById(id: string): Promise<Todo> {
    return this.todoRepository.findById(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoRepository.update(id, { ...updateTodoDto });
  }

  async delete(id: string): Promise<void> {
    return this.todoRepository.delete(id);
  }
}
