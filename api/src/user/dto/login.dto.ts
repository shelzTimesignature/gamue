import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto{
  @IsEmail()
  @IsNotEmpty()
  public email: string

  @IsNotEmpty()
  @MinLength(8)
  public password: string
}