import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user-dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginAuthDto } from './dto/authorization-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/register')
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso!', type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  @Post('/login')
  @ApiResponse({ status: 201, description: 'Login realizado com sucesso!', type: LoginAuthDto })
  login(@Body() loginUser: LoginUserDto) {
    return this.authService.login(loginUser);
  }


}
