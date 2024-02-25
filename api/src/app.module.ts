import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DrugModule } from './drug/drug.module';
import { LicenseModule } from './license/license.module';

@Module({
  imports: [UserModule, AuthModule, DrugModule, LicenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
