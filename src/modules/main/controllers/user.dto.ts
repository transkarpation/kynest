import {ApiProperty} from '@nestjs/swagger'
import {IsEmail} from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}