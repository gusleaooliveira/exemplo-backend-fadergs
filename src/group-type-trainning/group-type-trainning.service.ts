import { Injectable } from '@nestjs/common';
import { CreateGroupTypeTrainningDto } from './dto/create-group-type-trainning.dto';
import { UpdateGroupTypeTrainningDto } from './dto/update-group-type-trainning.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupTypeTrainning } from './entities/group-type-trainning.entity';

@Injectable()
export class GroupTypeTrainningService {

  constructor(
    @InjectRepository(GroupTypeTrainning)
    private groupTypeTrainningRepository: Repository<GroupTypeTrainning>
  ) { }

  async create(createGroupTypeTrainningDto: CreateGroupTypeTrainningDto) {
    const groupTypeTrainning = this.groupTypeTrainningRepository.create(createGroupTypeTrainningDto)
    return await this.groupTypeTrainningRepository.save(groupTypeTrainning)
  }

  async findAll() {
    return await this.groupTypeTrainningRepository.find();
  }

  async findOne(id: number) {
    return await this.groupTypeTrainningRepository.findOneBy({ id });
  }

  async update(id: number, updateGroupTypeTrainningDto: UpdateGroupTypeTrainningDto) {
    await this.groupTypeTrainningRepository.update({ id }, updateGroupTypeTrainningDto)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const GroupTypeTrainning = await this.findOne(id)
    await this.groupTypeTrainningRepository.delete({ id })
    return { message: `Grupo de treino ${GroupTypeTrainning.id} removido!` }
  }
}
