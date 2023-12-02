import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UserTrainningService } from './user-trainning.service';
import { CreateUserTrainningDto } from './dto/create-user-trainning.dto';
import { UpdateUserTrainningDto } from './dto/update-user-trainning.dto';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteUserTrainningDto } from './dto/delete-user-trainning.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('user-trainning')
@Controller('user-trainning')
export class UserTrainningController {
  constructor(private readonly userTrainningService: UserTrainningService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Treino do usuário salvo com sucesso!', type: UpdateUserTrainningDto })
  create(@Body() createUserTrainningDto: CreateUserTrainningDto) {
    return this.userTrainningService.create(createUserTrainningDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Treinos dos usuários!', type: UpdateUserTrainningDto, isArray: true })
  findAll() {
    return this.userTrainningService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Treino do usuário!', type: UpdateUserTrainningDto })
  findOne(@Param('id') id: number) {
    return this.userTrainningService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Treino do usuário atualizado com sucesso!', type: UpdateUserTrainningDto })
  update(@Param('id') id: number, @Body() updateUserTrainningDto: UpdateUserTrainningDto) {
    return this.userTrainningService.update(id, updateUserTrainningDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({
    status: 201, description: 'Treino do usuário removido com sucesso!', type: DeleteUserTrainningDto
  })
  remove(@Param('id') id: number) {
    return this.userTrainningService.remove(id);
  }
}
