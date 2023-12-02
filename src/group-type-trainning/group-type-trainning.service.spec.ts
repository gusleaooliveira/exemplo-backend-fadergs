import { Test, TestingModule } from '@nestjs/testing';
import { GroupTypeTrainningService } from './group-type-trainning.service';

describe('GroupTypeTrainningService', () => {
  let service: GroupTypeTrainningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupTypeTrainningService],
    }).compile();

    service = module.get<GroupTypeTrainningService>(GroupTypeTrainningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
