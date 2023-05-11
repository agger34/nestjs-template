import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TodoModule } from './module/todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { MyGraphqlModule } from './graphql/my-graphql.module';
import { GraphQLModule } from '@nestjs/graphql';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TodoModule,
    AuthModule,
    UserModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    MyGraphqlModule,
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      autoSchemaFile: 'src/graphql/schema.gql',
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
