import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) { }

  async create(createTaskDto: CreateTaskDto) {
    const Task = this.taskRepository.create(createTaskDto)
    return await this.taskRepository.save(Task)
  }

  async findAll() {
    return await this.taskRepository
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.group', 'group_task')
      .getMany();
  }

  async findOne(id: number) {
    return await this.taskRepository
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.group', 'group_task')
      .where('task.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.taskRepository.update({ id }, updateTaskDto)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const Task = await this.findOne(id)
    await this.taskRepository.delete({ id })
    return { message: `Tarefa ${Task.id} removida!` }
  }
}
