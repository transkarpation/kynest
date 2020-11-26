import { Controller, Request, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { LoginDto } from './login.dto';
import {ApiBody, ApiOkResponse} from '@nestjs/swagger'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({ description: 'result Token' })
  async login(@Request() req) {
    return this.authService.login(req.user);return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
