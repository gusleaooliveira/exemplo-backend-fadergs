import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user-dto';
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {


  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(loginUser: LoginUserDto) {



    const user = await this.userService.findByEmail(loginUser.email)
    const isMatchPassword = await bcrypt.compare(loginUser.password, user.password)

    if (!user) {
      const message = { isValid: false, message: 'Usuário não encontrado!', user: null }
      return message
    }

    if (!isMatchPassword) {
      const message = { isValid: false, message: 'Dados de usuário incorretos!', user: null }
      return message
    }

    if (!!user && isMatchPassword) {
      const message = { isValid: true, message: 'Usuário valido!', user }
      return message

    }
  }


  async login(loginUser: LoginUserDto) {

    console.log(loginUser);

    const user = await this.validateUser(loginUser)
    if (user.isValid == false) {

    }
    else {
      const payload = {
        email: user.user.email,
        password: user.user.password,
        name: user.user.name,
        id: user.user.id
      }
      const token = await this.jwtService.signAsync(payload)
      const message = { user: user.user, token }
      return message
    }
  }


  async createUser(createUserDto: CreateUserDto) {
    const user = await this.userService.findByEmail(createUserDto.email)
    if (!!user) {
      const message = { message: 'Usuário já cadastrado!' }
      return message
    }
    else {
      const saltTesting = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(createUserDto.password, saltTesting)

      const newUser = Object.assign({ ...createUserDto }, { password: passwordHash })

      const user = await this.userService.create(newUser)
      return user
    }
  }

}
