import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { UserDto } from "./dto/user.dto";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";
import { TokenDto } from "./dto/token.dto";
import { LoginDto } from "./dto/login.dto";
import { jwtConstants } from "./constants";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    private prisma:PrismaService,
    private jwtService:JwtService
  ) {}

  async add(dto:UserDto){

    const {confirm,...rest}=dto

    if(rest.password!==confirm){
      throw new BadRequestException(['Passwords do not match'])
    }

    const user=await this.prisma.user.findUnique({
      where:{
        email:dto.email
      }
    })

    if(user){
      throw new BadRequestException(['Email is already taken'])
    }



    const result=await this.prisma.user.create({
      data:{
        ...rest,
        password:await hash(rest.password,12)

      }
    })


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password,...newUser}=result
    return newUser
  }


  async update(id: string,dto:UpdateUserDto){

    const user=await this.prisma.user.findFirst({
      where:{
        NOT:{
          id
        },
        email:dto.email
      }
    })


    if(user){
      throw new BadRequestException(['Email is already taken'])
    }
    


    const result=await this.prisma.user.update({
      data:dto,
      where:{
        id
      }
    })


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password,...newUser}=result
    return newUser
  }

  async get(){
    const result=await this.prisma.user.findMany()
    return result
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where:{
        id:id
      }
    })
  }


  async login(dto:LoginDto){
    //check email
    const user=await this.prisma.user.findUnique({
      where:{
        email:dto.email
      }
    })

    if(!user){
      throw new UnauthorizedException()
    }

    //check password

    const isAMatch=await compare(dto.password,user.password)

    if(!isAMatch){
      throw new UnauthorizedException()
    }




    return {
      accessToken:await this.generate_token({
        sub:user.id,
        username:user.email,
        secret:jwtConstants.secret
      }),
      refreshToken:await this.generate_token({
        sub:user.id,
        username:user.email,
        secret:jwtConstants.refresh,
        expiresIn:'7d'
      }),
    }
  }


  async generate_token(payload:TokenDto){

      const token= await this.jwtService.signAsync(
        {sub:payload.sub, username:payload.username},
        {
          expiresIn: payload.expiresIn ?? '1d',
          secret:payload.secret ?? ''
        }
      )


    console.log(token)

    return token
  }


}
