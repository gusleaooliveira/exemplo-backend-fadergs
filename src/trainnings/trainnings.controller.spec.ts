import { Test, TestingModule } from '@nestjs/testing';
import { TrainningsController } from './trainnings.controller';
import { TrainningsService } from './trainnings.service';

describe('TrainningsController', () => {
  let controller: TrainningsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainningsController],
      providers: [TrainningsService],
    }).compile();

    controller = module.get<TrainningsController>(TrainningsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
