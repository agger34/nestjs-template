import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, TodoModule],
})
export class AppModule {}
