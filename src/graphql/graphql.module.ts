import { Module } from '@nestjs/common';
import { TodoModule } from '../module/todo/todo.module';
import { TodoResolver } from './resolver/todo.resolver';

@Module({
  imports: [TodoModule],
  providers: [TodoResolver],
})
export class GraphqlModule {}
