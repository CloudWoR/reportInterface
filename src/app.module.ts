import { LocaldbModule } from '@libs/libs';
import { T_S_PACS } from '@libs/libs/entity/T_S_PACS.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacsdbModule } from 'libs/pacsdb/src';
import { tReportInfoKiosk } from 'libs/pacsdb/src/entity/tReportInfoKiosk.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacsModule } from './pacs/pacs.module';

@Module({
  imports: [PacsModule, LocaldbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
