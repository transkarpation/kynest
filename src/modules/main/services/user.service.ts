import { Injectable } from "@nestjs/common";
import { User } from "src/modules/db/entities/user.entity";
import { UserRepository } from "src/modules/db/repositories/user.repository";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(email: string, password: string): Promise<User> {
    const user = new User();

    user.email = email;
    user.password = password;

    return this.userRepository.save(user)
  }
}