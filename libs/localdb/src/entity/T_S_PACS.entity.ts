import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({
  name: 't_s_pacs',
})
export class T_S_PACS {
  @PrimaryGeneratedColumn('uuid')
  ID: string;
  @Column()
  ClinicNo?: string;

  @Column()
  RISPID?: string;

  @Column()
  AccessionNumber?: string;

  @Column()
  PatientType?: string;

  @Column()
  PatientCName?: string;

  @Column()
  PatientEName?: string;

  @Column()
  BirthDay?: string;

  @Column()
  Sex?: string;

  @Column()
  Age?: string;

  @Column()
  ModalityType?: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  Technician?: string;

  @Column()
  ReportDoctor?: string;

  @Column()
  InhospitalNo?: string;

  @Column({
    type: 'blob',
  })
  ReportDoctorImage?: string;

  @Column({
    type: 'blob',
  })
  ReportApproverImage?: string;

  @Column()
  ReportApprover?: string;

  @Column()
  StudyDateTime?: string;

  @Column()
  ReportDateTime?: string;

  @Column()
  ApproveDateTime?: string;

  @Column({
    type: 'text',
  })
  Representation?: string;

  @Column({
    type: 'text',
  })
  Impression?: string;

  @Column()
  IsPositive?: string;

  @Column()
  ReportFtpURL?: string;

  @Column()
  Description?: string;

  @Column()
  ExposalCount?: string;

  @Column()
  FilmCount?: string;

  @Column()
  jc_charge?: string;

  @Column()
  his_charge?: string;

  @Column()
  Registrar?: string;

  @Column()
  ApplyDept?: string;

  @Column()
  ApplyDoctor?: string;

  @Column()
  RemoteAccNo?: string;

  @Column()
  FilmSpec?: string;

  @Column()
  DJTime?: string;

  @Column()
  status?: string;

  @Column()
  Modality?: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  Enhance?: string;

  @Column()
  JCFS?: string;

  @Column()
  ZYH?: string;

  @Column()
  CH?: string;

  @Column()
  BQ?: string;
}
