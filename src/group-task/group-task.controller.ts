import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { GroupTaskService } from './group-task.service';
import { CreateGroupTaskDto } from './dto/create-group-task.dto';
import { UpdateGroupTaskDto } from './dto/update-group-task.dto';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteTrainningDto } from 'src/trainnings/dto/delete-trainning.dto';
import { DeleteGroupTaskDto } from './dto/delete-group-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('group-tasks')
@Controller('group-tasks')
export class GroupTaskController {
  constructor(private readonly groupTaskService: GroupTaskService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Grupo de tarefas criado com sucesso!', type: UpdateGroupTaskDto })
  create(@Body() createGroupTaskDto: CreateGroupTaskDto) {
    return this.groupTaskService.create(createGroupTaskDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Grupos de tarefas!', type: UpdateGroupTaskDto, isArray: true })
  findAll() {
    return this.groupTaskService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Grupo de tarefas!', type: UpdateGroupTaskDto })
  findOne(@Param('id') id: number) {
    return this.groupTaskService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Grupo de tarefas atualizado com sucesso!', type: UpdateGroupTaskDto })
  update(@Param('id') id: number, @Body() updateGroupTaskDto: UpdateGroupTaskDto) {
    return this.groupTaskService.update(id, updateGroupTaskDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({
    status: 201, description: 'Grupo de tarefas removido com sucesso!', type: DeleteGroupTaskDto
  })
  remove(@Param('id') id: number) {
    return this.groupTaskService.remove(id);
  }
}
