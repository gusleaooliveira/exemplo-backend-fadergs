import { Test, TestingModule } from '@nestjs/testing';
import { MuscleGroupTrainningController } from './muscle-group-trainning.controller';
import { MuscleGroupTrainningService } from './muscle-group-trainning.service';

describe('MuscleGroupTrainningController', () => {
  let controller: MuscleGroupTrainningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuscleGroupTrainningController],
      providers: [MuscleGroupTrainningService],
    }).compile();

    controller = module.get<MuscleGroupTrainningController>(MuscleGroupTrainningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
