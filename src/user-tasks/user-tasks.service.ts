import { Injectable } from '@nestjs/common';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTask } from './entities/user-task.entity';

@Injectable()
export class UserTasksService {

  constructor(
    @InjectRepository(UserTask)
    private userTaskRepository: Repository<UserTask>
  ) { }

  async create(createUserTaskDto: CreateUserTaskDto) {
    const UserTask = this.userTaskRepository.create(createUserTaskDto)
    return await this.userTaskRepository.save(UserTask)
  }

  async findAll() {
    return await this.userTaskRepository
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.user', 'user',)
      .leftJoinAndSelect('task.tasks', 'tasks')
      .leftJoinAndSelect('tasks.group', 'group')
      .getMany()
  }

  async findOne(id: number) {
    return await this.userTaskRepository
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.user', 'user',)
      .leftJoinAndSelect('task.tasks', 'tasks')
      .leftJoinAndSelect('tasks.group', 'group')
      .where('task.id = :id', { id })
      .getOne()
  }

  async update(id: number, updateUserTaskDto: UpdateUserTaskDto) {
    await this.userTaskRepository.update({ id }, updateUserTaskDto)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const UserTask = await this.findOne(id)
    await this.userTaskRepository.delete({ id })
    return { message: `Tarefa do Usuário ${UserTask.id} removida!` }
  }
}
