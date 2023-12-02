import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteTaskDto } from './dto/delete-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Tarefa criada com sucesso!', type: UpdateTaskDto })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Tarefas!', type: UpdateTaskDto, isArray: true })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Tarefa!', type: UpdateTaskDto })
  findOne(@Param('id') id: number) {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Tarefa atualizada com sucesso!', type: UpdateTaskDto })
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({
    status: 201, description: 'Tarefa removida com sucesso!', type: DeleteTaskDto
  })
  remove(@Param('id') id: number) {
    return this.tasksService.remove(id);
  }
}
