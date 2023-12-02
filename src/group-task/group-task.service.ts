import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupTask } from './entities/group-task.entity';
import { CreateGroupTaskDto } from './dto/create-group-task.dto';
import { UpdateGroupTaskDto } from './dto/update-group-task.dto';

@Injectable()
export class GroupTaskService {

  constructor(
    @InjectRepository(GroupTask)
    private GroupTaskRepository: Repository<GroupTask>
  ) { }

  async create(createGroupTaskDto: CreateGroupTaskDto) {
    const GroupTask = this.GroupTaskRepository.create(createGroupTaskDto)
    return await this.GroupTaskRepository.save(GroupTask)
  }

  async findAll() {
    return await this.GroupTaskRepository.find();
  }

  async findOne(id: number) {
    return await this.GroupTaskRepository.findOneBy({ id });
  }

  async update(id: number, updateGroupTaskDto: UpdateGroupTaskDto) {
    await this.GroupTaskRepository.update({ id }, updateGroupTaskDto)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const GroupTask = await this.findOne(id)
    await this.GroupTaskRepository.delete({ id })
    return { message: `Grupo de tarefas ${GroupTask.id} removido!` }
  }
}
