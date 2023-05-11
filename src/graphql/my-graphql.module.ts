import { Module } from '@nestjs/common';
import { TodoModule } from '../module/todo/todo.module';
import { TodoResolver } from './todo/todo.resolver';

@Module({
  imports: [TodoModule],
  providers: [TodoResolver],
})
export class MyGraphqlModule {}
