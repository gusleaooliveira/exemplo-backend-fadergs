import { Test, TestingModule } from '@nestjs/testing';
import { MuscleGroupTrainningService } from './muscle-group-trainning.service';

describe('MuscleGroupTrainningService', () => {
  let service: MuscleGroupTrainningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuscleGroupTrainningService],
    }).compile();

    service = module.get<MuscleGroupTrainningService>(MuscleGroupTrainningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
