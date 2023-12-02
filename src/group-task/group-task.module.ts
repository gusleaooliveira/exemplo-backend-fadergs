import { Module } from '@nestjs/common';
import { GroupTaskService } from './group-task.service';
import { GroupTaskController } from './group-task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupTask } from './entities/group-task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupTask])],
  controllers: [GroupTaskController],
  providers: [GroupTaskService],
})
export class GroupTaskModule { }
