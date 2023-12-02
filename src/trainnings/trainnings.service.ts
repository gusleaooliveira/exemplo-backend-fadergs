import { Injectable } from '@nestjs/common';
import { CreateTrainningDto } from './dto/create-trainning.dto';
import { UpdateTrainningDto } from './dto/update-trainning.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trainning } from './entities/trainning.entity';

@Injectable()
export class TrainningsService {

  constructor(
    @InjectRepository(Trainning)
    private TrainningRepository: Repository<Trainning>
  ) { }

  async create(createTrainningDto: CreateTrainningDto) {
    const Trainning = this.TrainningRepository.create(createTrainningDto)
    return await this.TrainningRepository.save(Trainning)
  }

  async findAll() {
    return await this.TrainningRepository.find();
  }

  async findOne(id: number) {
    return await this.TrainningRepository.findOneBy({ id });
  }

  async update(id: number, updateTrainningDto: UpdateTrainningDto) {
    await this.TrainningRepository.update({ id }, updateTrainningDto)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const Trainning = await this.findOne(id)
    await this.TrainningRepository.delete({ id })
    return { message: `Usuário ${Trainning.id} removido!` }
  }
}
