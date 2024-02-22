import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from './auth.service';
import { UserService } from "../user/user.service";
import { LoginDto } from "../user/dto/login.dto";
import { AuthGuard } from "./guard/auth.guard";
import { Request } from "express";

@Controller('')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}


  @Post('login')

  async login(@Body() dto:LoginDto){
    return this.userService.login(dto)
  }


  @UseGuards(AuthGuard)
  @Get('user')
  async getDetails(@Req() req: Request){
    const user=req['user']
    return this.authService.getDetails(user.username)
  }


}
