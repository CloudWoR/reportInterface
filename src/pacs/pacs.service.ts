import { T_S_PACS } from '@libs/libs/entity/T_S_PACS.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tReportInfoKiosk } from 'libs/pacsdb/src/entity/tReportInfoKiosk.entity';
import { Between, FindOneOptions, Not, Repository } from 'typeorm';
import { CreatePacDto } from './dto/create-pac.dto';
import { UpdatePacDto } from './dto/update-pac.dto';
import * as moment from 'moment';
import { PDF_DATA } from './dto/pacs.dto';

@Injectable()
export class PacsService {
  private readonly selectFeilds = [
    'RISPID',
    'AccessionNumber',
    'PatientCName',
    'PatientType',
    'Age',
    'Sex',
    'Modality',
    'ModalityType',
    'status',
    'DJTime',
    'StudyDateTime',
    'ReportDateTime',
    'ApproveDateTime',
    'ReportDoctor',
    'ReportApprover',
    'ClinicNo',
    'InhospitalNo',
    'Representation',
    'Impression',
    'Description',
    'ApplyDept',
    'JCFS',
    'ZYH',
    'CH',
    'BQ',
  ];
  constructor(
    @InjectRepository(tReportInfoKiosk)
    private readonly pacsdb: Repository<tReportInfoKiosk>,
    @InjectRepository(T_S_PACS, 'localdb')
    private readonly localpacsdb: Repository<T_S_PACS>,
  ) {}
  // 初始化本地数据库，从远程数据库中获取数据填充本地数据库
  async initailLocalPacsdb() {
    const findPacsdb = await this.pacsdb.find({
      where: {
        DJTime: Between('2021-06-01 00:00:00', '2021-06-01 23:59:59'),
        ReportDoctor: Not(''),
      },
    });
    if (!findPacsdb) {
      return '未获取到pacs数据';
    }
    for (const pacs of findPacsdb) {
      const findLocal = await this.localpacsdb.findOne({
        where: { AccessionNumber: pacs.AccessionNumber },
      });
      if (findLocal) {
        await this.localpacsdb.update(findLocal.ID, findLocal);
      } else {
        await this.localpacsdb.insert(pacs as unknown as T_S_PACS);
      }
    }
    return '初始化本地数据库成功';
  }

  create(createPacDto: CreatePacDto) {
    return 'This action adds a new pac';
  }

  async findDay(date: string): Promise<PDF_DATA[]> {
    const todayStart = moment(date).format('YYYY-MM-DD 00:00:00');
    const todayEnd = moment(date).format('YYYY-MM-DD 23:59:59');
    const result = await this.localpacsdb.find({
      select: [
        'RISPID',
        'AccessionNumber',
        'PatientCName',
        'PatientType',
        'Age',
        'Sex',
        'Modality',
        'ModalityType',
        'status',
        'DJTime',
        'StudyDateTime',
        'ReportDateTime',
        'ApproveDateTime',
        'ReportDoctor',
        'ReportApprover',
        'ClinicNo',
        'InhospitalNo',
        'Representation',
        'Impression',
        'Description',
        'ApplyDept',
        'JCFS',
        'ZYH',
        'CH',
        'BQ',
      ],
      where: {
        DJTime: Between(todayStart, todayEnd),
      },
    });
    const reportArray = this.formatReport(result);
    return reportArray;
  }

  private formatReport(pacsArray: T_S_PACS[]): PDF_DATA[] {
    const result: PDF_DATA[] = [];
    for (const pacs of pacsArray) {
      const report: PDF_DATA = {
        patientInfo: {
          name: pacs.PatientCName,
          gender: pacs.Sex,
          age: pacs.Age,
          outpatientNumber: pacs.ClinicNo,
          department: pacs.ApplyDept,
          bedNumber: pacs.CH,
          inpatientNumber: pacs.ZYH,
          region: pacs.BQ,
        },
        reportInfo: {
          id: pacs.RISPID,
          accessionNumber: pacs.AccessionNumber,
          reportDate: pacs.ReportDateTime,
          modality: pacs.Modality,
          modalityType: pacs.ModalityType,
          studyDate: pacs.StudyDateTime,
          description: pacs.Description,
        },
        reportMessage: {
          inspectionMethod: pacs.Description,
          representation: pacs.Representation,
          impression: pacs.Impression,
        },
        doctorInfo: {
          reportDoctor: pacs.ReportDoctor,
          reportApprover: pacs.ReportApprover,
        },
      };
      result.push(report);
    }
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} pac`;
  }

  update(id: number, updatePacDto: UpdatePacDto) {
    return `This action updates a #${id} pac`;
  }

  remove(id: number) {
    return `This action removes a #${id} pac`;
  }
}
