import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RemoveUserDto } from './dto/remove-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso!', type: UpdateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Usuários!', type: UpdateUserDto, isArray: true })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Usuário!', type: UpdateUserDto })
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Usuário atualizado com sucesso!', type: UpdateUserDto })
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({
    status: 201, description: 'Usuário removido com sucesso!', type: RemoveUserDto
  })
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
