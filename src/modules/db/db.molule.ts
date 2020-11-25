import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

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
    TypeOrmModule.forFeature([])
  ],
  exports: [
    TypeOrmModule
  ]
})
export class DatabaseModule {}
