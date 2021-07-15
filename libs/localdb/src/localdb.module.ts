import { Global, Module } from '@nestjs/common';
import { LocaldbService } from './localdb.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { T_S_PACS } from './entity/T_S_PACS.entity';

const entities = TypeOrmModule.forFeature([T_S_PACS], 'localdb');

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'localdb',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'autoPrint',
      password: 'auto_print',
      database: 'springrain',
      entities: [__dirname + '/../entity/*.entity{.ts, .js}'],
      subscribers: [],
      timezone: '+0800',
      autoLoadEntities: true,
      synchronize: true,
    }),
    entities,
  ],
  providers: [LocaldbService],
  exports: [LocaldbService, entities],
})
export class LocaldbModule {}
