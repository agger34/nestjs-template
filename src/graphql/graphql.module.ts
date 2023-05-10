import { Module } from '@nestjs/common';
import { TodoResolver } from './resolver/todo.resolver';
import { TodoModule } from 'src/module/todo/todo.module';

@Module({
  imports: [TodoModule],
  providers: [TodoResolver],
})
export class GraphqlModule {}
