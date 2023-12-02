import { Test, TestingModule } from '@nestjs/testing';
import { UserTrainningController } from './user-trainning.controller';
import { UserTrainningService } from './user-trainning.service';

describe('UserTrainningController', () => {
  let controller: UserTrainningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTrainningController],
      providers: [UserTrainningService],
    }).compile();

    controller = module.get<UserTrainningController>(UserTrainningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
