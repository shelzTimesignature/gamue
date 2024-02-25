import { Module } from '@nestjs/common';
import { LicenseService } from './license.service';
import { LicenseController } from './license.controller';
import {PrismaService} from "../prisma.service";
import {JwtService} from "@nestjs/jwt";

@Module({
  controllers: [LicenseController],
  providers: [LicenseService, PrismaService,JwtService],
})
export class LicenseModule {}
