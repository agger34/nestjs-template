import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoDto, ResponseTodoDto } from 'src/module/todo/todo.dto';
import { TodoService } from '../../module/todo/todo.service';

@Resolver('Todo')
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Mutation()
  async createTodo(
    @Args('createTodoDto') args: CreateTodoDto,
  ): Promise<ResponseTodoDto> {
    return this.todoService.create(args);
  }

  @Query()
  async todos(): Promise<ResponseTodoDto[]> {
    return this.todoService.findAll();
  }

  @Query()
  async todo(@Args('id') id: string): Promise<ResponseTodoDto> {
    return this.todoService.findById(id);
  }
}
