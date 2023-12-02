import { Module } from '@nestjs/common';
import { UserTasksService } from './user-tasks.service';
import { UserTasksController } from './user-tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTask } from './entities/user-task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTask])],
  controllers: [UserTasksController],
  providers: [UserTasksService],
})
export class UserTasksModule { }
