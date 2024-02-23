import { Module } from '@nestjs/common';
import { DrugService } from './drug.service';
import { DrugController } from './drug.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [DrugController],
  providers: [DrugService, PrismaService],
})
export class DrugModule {}
