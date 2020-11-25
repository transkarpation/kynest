import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "./user.dto";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userToCreate: CreateUserDto): Promise<{id: number}> {
    const user = await this.userService.createUser(userToCreate.email, userToCreate.password)

    return {
      id: user.id
    }
  }
}