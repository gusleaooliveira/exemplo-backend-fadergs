import { Test, TestingModule } from '@nestjs/testing';
import { GroupTypeTrainningController } from './group-type-trainning.controller';
import { GroupTypeTrainningService } from './group-type-trainning.service';

describe('GroupTypeTrainningController', () => {
  let controller: GroupTypeTrainningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupTypeTrainningController],
      providers: [GroupTypeTrainningService],
    }).compile();

    controller = module.get<GroupTypeTrainningController>(GroupTypeTrainningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
