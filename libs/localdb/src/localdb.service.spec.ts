import { Test, TestingModule } from '@nestjs/testing';
import { LocaldbService } from './localdb.service';

describe('LocaldbService', () => {
  let service: LocaldbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocaldbService],
    }).compile();

    service = module.get<LocaldbService>(LocaldbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
