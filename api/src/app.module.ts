import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { CompanyModule } from './company/company.module';
import { LicenseModule } from './license/license.module';
import { DrugModule } from './drug/drug.module';

@Module({
  imports: [UserModule, AuthModule, CompanyModule, LicenseModule, DrugModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
