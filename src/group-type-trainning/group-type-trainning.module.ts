import { Module } from '@nestjs/common';
import { GroupTypeTrainningService } from './group-type-trainning.service';
import { GroupTypeTrainningController } from './group-type-trainning.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupTypeTrainning } from './entities/group-type-trainning.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupTypeTrainning])],
  controllers: [GroupTypeTrainningController],
  providers: [GroupTypeTrainningService],
})
export class GroupTypeTrainningModule { }
