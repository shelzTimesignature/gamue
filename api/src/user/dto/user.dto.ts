import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserDto{
  @IsNotEmpty()
  public name         : string

  @IsNotEmpty()
  public surname      : string

  @IsNotEmpty()
  @IsEmail()
  public email        : string

  @IsNotEmpty()
  @MinLength(8)
  public password        : string

  @IsNotEmpty()
  public confirm?     : string
}