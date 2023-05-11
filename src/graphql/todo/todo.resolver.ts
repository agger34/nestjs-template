import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from '../../module/todo/todo.service';
import { CreateTodoModel, TodoModel } from './todo.model';

@Resolver(() => TodoModel)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoModel], { name: 'todos' })
  async todos(): Promise<TodoModel[]> {
    return this.todoService.findAll();
  }

  @Query(() => TodoModel, { name: 'todo' })
  async todo(@Args('id') id: string): Promise<TodoModel> {
    return this.todoService.findById(id);
  }

  @Mutation(() => TodoModel)
  async createTodo(@Args('createTodoDto') args: CreateTodoModel) {
    return this.todoService.create(args);
  }
}
