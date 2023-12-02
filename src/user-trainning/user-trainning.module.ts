import { Module } from '@nestjs/common';
import { UserTrainningService } from './user-trainning.service';
import { UserTrainningController } from './user-trainning.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTrainning } from './entities/user-trainning.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTrainning])],
  controllers: [UserTrainningController],
  providers: [UserTrainningService],
})
export class UserTrainningModule { }
