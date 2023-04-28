import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateTodoDto, ResponseTodoDto, UpdateTodoDto } from './todo.dto';
import { TodoStatus } from './todo.enum';

@Injectable()
export class TodoRepository {
  constructor(
    @Inject('TODO_MODEL')
    private todoModel: Model<ResponseTodoDto>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<ResponseTodoDto> {
    const createdCat = new this.todoModel({
      ...createTodoDto,
      status: TodoStatus.TODO,
    });
    return createdCat.save();
  }

  async findAll(): Promise<ResponseTodoDto[]> {
    return this.todoModel.find().exec();
  }

  async findById(id: string): Promise<ResponseTodoDto> {
    return this.todoModel.findById(id).exec();
  }

  async update(
    id: string,
    updateTodoDto: UpdateTodoDto,
  ): Promise<ResponseTodoDto> {
    return this.todoModel
      .findByIdAndUpdate(id, updateTodoDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<void> {
    await this.todoModel.findByIdAndDelete(id).exec();
  }
}
