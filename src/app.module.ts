import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/db/db.molule';
import { UserController } from './modules/main/controllers/user.controller';
import { UserService } from './modules/main/services/user.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
