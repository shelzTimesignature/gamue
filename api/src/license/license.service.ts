import { Injectable } from '@nestjs/common';
import { CreateLicenseDto } from './dto/create-license.dto';
import { UpdateLicenseDto } from './dto/update-license.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class LicenseService {

  constructor(private prisma:PrismaService) {
  }
  create(createLicenseDto: CreateLicenseDto) {
    return this.prisma.license.create({
      data:createLicenseDto
    })
  }

  findAll() {
    return this.prisma.license.findMany({
      include:{
        user:true,
        drug:true
      }
    })
  }

  findOne(id: string) {
    return this.prisma.license.findUnique({
      where:{
        id
      }
    })
  }

  update(id: string, updateLicenseDto: UpdateLicenseDto) {
    return this.prisma.license.update({
      where:{
        id
      },
      data:updateLicenseDto
    })
  }

  remove(id: string) {
    return this.prisma.license.delete({
      where:{
        id
      },
    })
  }
}
