import { Injectable } from '@nestjs/common';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class DrugService {
  constructor(private prisma:PrismaService) {
  }
  create(createDrugDto: CreateDrugDto) {
    return this.prisma.drug.create({
      data:createDrugDto
    })
  }

  findAll() {
    return this.prisma.drug.findMany()
  }

  findOne(id: string) {
    return this.prisma.drug.findUnique({
      where:{
        id
      }
    })
  }

  update(id: string, updateDrugDto: UpdateDrugDto) {
    return this.prisma.drug.update({
      where:{
        id
      },
      data:updateDrugDto
    })
  }

  remove(id: string) {
    return this.prisma.drug.delete({
      where:{
        id
      }
    })
  }
}
