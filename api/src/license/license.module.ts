import { Module } from '@nestjs/common';
import { LicenseService } from './license.service';
import { LicenseController } from './license.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [LicenseController],
  providers: [LicenseService, PrismaService],
})
export class LicenseModule {}
