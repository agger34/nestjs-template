import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoRepository } from './todo.repository';
import { TodoProviders } from './todo.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [...TodoProviders, TodoRepository, TodoService],
})
export class TodoModule {}
