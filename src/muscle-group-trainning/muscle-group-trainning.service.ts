import { Injectable } from '@nestjs/common';
import { CreateMuscleGroupTrainningDto } from './dto/create-muscle-group-trainning.dto';
import { UpdateMuscleGroupTrainningDto } from './dto/update-muscle-group-trainning.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MuscleGroupTrainning } from './entities/muscle-group-trainning.entity';

@Injectable()
export class MuscleGroupTrainningService {

  constructor(
    @InjectRepository(MuscleGroupTrainning)
    private muscleGroupTrainningRepository: Repository<MuscleGroupTrainning>
  ) { }

  async create(createMuscleGroupTrainningDto: CreateMuscleGroupTrainningDto) {
    const MuscleGroupTrainning = this.muscleGroupTrainningRepository.create(createMuscleGroupTrainningDto)
    return await this.muscleGroupTrainningRepository.save(MuscleGroupTrainning)
  }

  async findAll() {
    return await this.muscleGroupTrainningRepository.find();
  }

  async findOne(id: number) {
    return await this.muscleGroupTrainningRepository.findOneBy({ id });
  }

  async update(id: number, updateMuscleGroupTrainningDto: UpdateMuscleGroupTrainningDto) {
    await this.muscleGroupTrainningRepository.update({ id }, updateMuscleGroupTrainningDto)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const MuscleGroupTrainning = await this.findOne(id)
    await this.muscleGroupTrainningRepository.delete({ id })
    return { message: `Grupo muscular  ${MuscleGroupTrainning.id} removido!` }
  }
}
