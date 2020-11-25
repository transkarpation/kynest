import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserRepository } from "./repositories/user.repository";

@Module({
  imports: [
    TypeOrmModule
      .forRoot({
        type: 'sqlite',
        database: 'sqlite.db',
        synchronize: true,
        logging: true,
        entities: [User]
      }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  exports: [
    TypeOrmModule
  ]
})
export class DatabaseModule {}
