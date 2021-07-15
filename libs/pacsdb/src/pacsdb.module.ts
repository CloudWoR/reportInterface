import { Global, Module } from '@nestjs/common';
import { PacsdbService } from './pacsdb.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tReportInfoKiosk } from './entity/tReportInfoKiosk.entity';

const model = TypeOrmModule.forFeature([tReportInfoKiosk]);
// @Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      authentication: {
        type: 'default',
        options: {
          userName: 'kiosk',
          password: 'kiosk',
        },
      },
      options: {
        encrypt: false,
        enableArithAbort: false,
      },
      database: 'GCRIS2',
      host: '192.168.11.218',
      autoLoadEntities: true,
    }),
    model,
  ],
  exports: [model],
})
export class PacsdbModule {}
