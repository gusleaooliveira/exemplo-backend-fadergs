import { Test, TestingModule } from '@nestjs/testing';
import { GroupTaskService } from './group-task.service';

describe('GroupTaskService', () => {
  let service: GroupTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupTaskService],
    }).compile();

    service = module.get<GroupTaskService>(GroupTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
