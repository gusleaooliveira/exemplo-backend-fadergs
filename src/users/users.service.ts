import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto)
    const user = await this.userRepository.save(newUser)
    return await this.findOneWithoutPassword(user.id)
  }

  async findOneWithoutPassword(id: number) {
    return await this.userRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.name', 'user.email'])
      .where('user.id = :id', { id })
      .getOne()
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async findByEmail(email: string) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .getOne()
  }


  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update({ id }, updateUserDto)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const user = await this.findOne(id)
    await this.userRepository.delete({ id })
    return { message: `Usuário ${user.name} removido!` }
  }
}
