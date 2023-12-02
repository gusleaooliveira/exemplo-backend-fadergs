import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UserTasksService } from './user-tasks.service';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('user-tasks')
@Controller('user-tasks')
export class UserTasksController {
  constructor(private readonly userTasksService: UserTasksService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Tarefa do Usuário criada com sucesso!', type: UpdateUserTaskDto })
  create(@Body() createUserTaskDto: CreateUserTaskDto) {
    return this.userTasksService.create(createUserTaskDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Tarefas do Usuário!', type: UpdateUserTaskDto, isArray: true })
  findAll() {
    return this.userTasksService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Tarefa do Usuário!', type: UpdateUserTaskDto })
  findOne(@Param('id') id: number) {
    return this.userTasksService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Tarefa do Usuário atualizada com sucesso!', type: UpdateUserTaskDto })
  update(@Param('id') id: number, @Body() updateUserTaskDto: UpdateUserTaskDto) {
    return this.userTasksService.update(id, updateUserTaskDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({
    status: 201, description: 'Tarefa do Usuário removida com sucesso!', type: UpdateUserTaskDto
  })
  remove(@Param('id') id: number) {
    return this.userTasksService.remove(id);
  }
}
