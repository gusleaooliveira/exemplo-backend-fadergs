import { Injectable } from '@nestjs/common';
import { CreateUserTrainningDto } from './dto/create-user-trainning.dto';
import { UpdateUserTrainningDto } from './dto/update-user-trainning.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTrainning } from './entities/user-trainning.entity';

@Injectable()
export class UserTrainningService {

  constructor(
    @InjectRepository(UserTrainning)
    private userTrainningRepository: Repository<UserTrainning>
  ) { }

  async create(createUserTrainningDto: CreateUserTrainningDto) {
    const UserTrainning = this.userTrainningRepository.create(createUserTrainningDto)
    return await this.userTrainningRepository.save(UserTrainning)
  }

  async findAll() {
    return await this.userTrainningRepository.find();
  }

  async findOne(id: number) {
    return await this.userTrainningRepository.findOneBy({ id });
  }

  async update(id: number, updateUserTrainningDto: UpdateUserTrainningDto) {
    await this.userTrainningRepository.update({ id }, updateUserTrainningDto)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const UserTrainning = await this.findOne(id)
    await this.userTrainningRepository.delete({ id })
    return { message: `Treino do usuário ${UserTrainning.id} removido!` }
  }
}
