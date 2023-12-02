import { Test, TestingModule } from '@nestjs/testing';
import { UserTrainningService } from './user-trainning.service';

describe('UserTrainningService', () => {
  let service: UserTrainningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTrainningService],
    }).compile();

    service = module.get<UserTrainningService>(UserTrainningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
