import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user.entity";


@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findUserByEmail(email: string): Promise<User> {
    return this.createQueryBuilder('user')
      .where('user.email = :email', {email})
      .getOne();
  }
}