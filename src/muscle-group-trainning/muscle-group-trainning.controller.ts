import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { MuscleGroupTrainningService } from './muscle-group-trainning.service';
import { CreateMuscleGroupTrainningDto } from './dto/create-muscle-group-trainning.dto';
import { UpdateMuscleGroupTrainningDto } from './dto/update-muscle-group-trainning.dto';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteGroupTrainningDto } from 'src/group-type-trainning/dto/delete-group-type-trainning.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('muscle-group-trainning')
@Controller('muscle-group-trainning')
export class MuscleGroupTrainningController {
  constructor(private readonly muscleGroupTrainningService: MuscleGroupTrainningService) { }

  @Post()
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Grupo muscular criado com sucesso!', type: UpdateMuscleGroupTrainningDto })
  create(@Body() createMuscleGroupTrainningDto: CreateMuscleGroupTrainningDto) {
    return this.muscleGroupTrainningService.create(createMuscleGroupTrainningDto);
  }

  @Get()
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Grupos musculares!', type: UpdateMuscleGroupTrainningDto, isArray: true })
  findAll() {
    return this.muscleGroupTrainningService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 201, description: 'Grupo muscular!', type: UpdateMuscleGroupTrainningDto })
  findOne(@Param('id') id: number) {
    return this.muscleGroupTrainningService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Grupo muscular atualizado com sucesso!', type: UpdateMuscleGroupTrainningDto })
  update(@Param('id') id: number, @Body() updateMuscleGroupTrainningDto: UpdateMuscleGroupTrainningDto) {
    return this.muscleGroupTrainningService.update(id, updateMuscleGroupTrainningDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Grupo muscular removido com sucesso!', type: DeleteGroupTrainningDto })
  remove(@Param('id') id: number) {
    return this.muscleGroupTrainningService.remove(id);
  }
}
