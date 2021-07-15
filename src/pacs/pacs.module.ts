import { Module } from '@nestjs/common';
import { PacsService } from './pacs.service';
import { PacsController } from './pacs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { T_S_PACS } from '@libs/libs/entity/T_S_PACS.entity';
import { tReportInfoKiosk } from 'libs/pacsdb/src/entity/tReportInfoKiosk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([T_S_PACS], 'localdb')],
  controllers: [PacsController],
  providers: [PacsService],
})
export class PacsModule {}
