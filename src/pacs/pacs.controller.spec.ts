import { Test, TestingModule } from '@nestjs/testing';
import { PacsController } from './pacs.controller';
import { PacsService } from './pacs.service';

describe('PacsController', () => {
  let controller: PacsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacsController],
      providers: [PacsService],
    }).compile();

    controller = module.get<PacsController>(PacsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
