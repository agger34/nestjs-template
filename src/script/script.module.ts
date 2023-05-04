import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/module/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UserModule],
})
export class ScriptModule {}
