import { Module } from '@nestjs/common';
import { MuscleGroupTrainningService } from './muscle-group-trainning.service';
import { MuscleGroupTrainningController } from './muscle-group-trainning.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuscleGroupTrainning } from './entities/muscle-group-trainning.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MuscleGroupTrainning])
  ],
  controllers: [MuscleGroupTrainningController],
  providers: [MuscleGroupTrainningService],
})
export class MuscleGroupTrainningModule { }
