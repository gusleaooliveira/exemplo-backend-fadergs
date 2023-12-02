import { Module } from '@nestjs/common';
import { TrainningsService } from './trainnings.service';
import { TrainningsController } from './trainnings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainning } from './entities/trainning.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trainning])],
  controllers: [TrainningsController],
  providers: [TrainningsService],
})
export class TrainningsModule { }
