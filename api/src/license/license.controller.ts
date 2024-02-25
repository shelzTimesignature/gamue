import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req} from '@nestjs/common';
import { LicenseService } from './license.service';
import { CreateLicenseDto } from './dto/create-license.dto';
import { UpdateLicenseDto } from './dto/update-license.dto';
import {AuthGuard} from "../auth/guard/auth.guard";
import {Request} from "express";

@Controller('license')
export class LicenseController {
  constructor(private readonly licenseService: LicenseService) {}


  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createLicenseDto: CreateLicenseDto, @Req() req: Request) {
    const user=req['user']
    createLicenseDto.userId=user.sub
    createLicenseDto.status='processing'
    return this.licenseService.create(createLicenseDto);
  }

  @Get()
  findAll() {
    return this.licenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licenseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLicenseDto: UpdateLicenseDto) {
    return this.licenseService.update(id, updateLicenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licenseService.remove(id);
  }
}
