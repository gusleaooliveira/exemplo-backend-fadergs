import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { GroupTypeTrainningService } from './group-type-trainning.service';
import { CreateGroupTypeTrainningDto } from './dto/create-group-type-trainning.dto';
import { UpdateGroupTypeTrainningDto } from './dto/update-group-type-trainning.dto';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteGroupTrainningDto } from './dto/delete-group-type-trainning.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('group-type-trainning')
@Controller('group-type-trainning')
export class GroupTypeTrainningController {
  constructor(private readonly groupTypeTrainningService: GroupTypeTrainningService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Grupo de treino criado com sucesso!', type: UpdateGroupTypeTrainningDto })
  create(@Body() createGroupTypeTrainningDto: CreateGroupTypeTrainningDto) {
    return this.groupTypeTrainningService.create(createGroupTypeTrainningDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Grupos de treino!', type: UpdateGroupTypeTrainningDto, isArray: true })
  findAll() {
    return this.groupTypeTrainningService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Grupo de treino!', type: UpdateGroupTypeTrainningDto })
  findOne(@Param('id') id: number) {
    return this.groupTypeTrainningService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Grupo de treino atualizado com sucesso!', type: UpdateGroupTypeTrainningDto })
  update(@Param('id') id: number, @Body() updateGroupTypeTrainningDto: UpdateGroupTypeTrainningDto) {
    return this.groupTypeTrainningService.update(id, updateGroupTypeTrainningDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({
    status: 201, description: 'Grupo de treino removido com sucesso!', type: DeleteGroupTrainningDto
  })
  remove(@Param('id') id: number) {
    return this.groupTypeTrainningService.remove(id);
  }
}
