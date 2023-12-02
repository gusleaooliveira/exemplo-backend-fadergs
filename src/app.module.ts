import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GroupTaskModule } from './group-task/group-task.module';
import { GroupTypeTrainningModule } from './group-type-trainning/group-type-trainning.module';
import { MuscleGroupTrainningModule } from './muscle-group-trainning/muscle-group-trainning.module';
import { TasksModule } from './tasks/tasks.module';
import { TrainningsModule } from './trainnings/trainnings.module';
import { UserTasksModule } from './user-tasks/user-tasks.module';
import { UserTrainningModule } from './user-trainning/user-trainning.module';

import { User } from "./users/entities/user.entity";
import { GroupTask } from './group-task/entities/group-task.entity';
import { Task } from './tasks/entities/task.entity';
import { UserTrainning } from './user-trainning/entities/user-trainning.entity';
import { UserTask } from './user-tasks/entities/user-task.entity';
import { Trainning } from './trainnings/entities/trainning.entity';
import { MuscleGroupTrainning } from './muscle-group-trainning/entities/muscle-group-trainning.entity';
import { GroupTypeTrainning } from './group-type-trainning/entities/group-type-trainning.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [
        User,
        UserTrainning,
        UserTask,
        Trainning,
        GroupTask,
        Task,
        MuscleGroupTrainning,
        GroupTypeTrainning,
        GroupTask
      ],
      synchronize: true,
      logging: true
    }),
    UsersModule,
    GroupTaskModule,
    GroupTypeTrainningModule,
    MuscleGroupTrainningModule,
    TasksModule,
    TrainningsModule,
    UserTasksModule,
    UserTrainningModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
