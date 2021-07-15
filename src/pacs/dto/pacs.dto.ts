export class PDF_DATA {
  patientInfo: {
    name: string; // 患者姓名
    gender: string; // 患者性别
    age: string; // 患者年龄
    outpatientNumber: string; // 门诊号
    department: string; // 科室
    bedNumber: string; // 床号
    inpatientNumber: string; // 住院号
    region: string; // 病区
  };
  reportInfo: {
    id: string; // 病人编号
    accessionNumber: string; // 检查号
    reportDate: string; // 报告日期
    modality: string; // 设备
    modalityType: string; // 设备类型
    studyDate: string; // 检查日期
    description: string; // 检查项目
  };
  reportMessage: {
    inspectionMethod: string; // 检查方法
    representation: string; // 影像表现
    impression: string; // 影像诊断
  };
  doctorInfo: {
    reportDoctor: string;
    reportDoctorImage?: Blob;
    reportApprover: string;
    reportApproverImage?: Blob;
    printTime?: string;
  };
}
