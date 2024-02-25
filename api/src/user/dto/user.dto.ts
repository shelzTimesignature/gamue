import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserDto{
  @IsNotEmpty()
  public name: string

  @IsNotEmpty()
  @IsEmail()
  public email: string

  @IsNotEmpty()
  @MinLength(8)
  public password: string

  @IsNotEmpty()
  @MinLength(8)
  public confirm: string

  @IsNotEmpty()
  public type: string

  @IsNotEmpty()
  public phone: string




}