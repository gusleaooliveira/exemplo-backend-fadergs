import { Test, TestingModule } from '@nestjs/testing';
import { GroupTaskController } from './group-task.controller';
import { GroupTaskService } from './group-task.service';

describe('GroupTaskController', () => {
  let controller: GroupTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupTaskController],
      providers: [GroupTaskService],
    }).compile();

    controller = module.get<GroupTaskController>(GroupTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
