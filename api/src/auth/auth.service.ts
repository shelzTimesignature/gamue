import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma.service";

@Injectable()
export class AuthService {


  constructor(private prisma:PrismaService) {
  }


  async getDetails(email:string){
    const user=await this.prisma.user.findUnique({
      where:{
        email
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password,...rest}=user
    return rest

  }

}
