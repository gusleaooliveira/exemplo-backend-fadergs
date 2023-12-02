import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { TrainningsService } from './trainnings.service';
import { CreateTrainningDto } from './dto/create-trainning.dto';
import { UpdateTrainningDto } from './dto/update-trainning.dto';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteTrainningDto } from './dto/delete-trainning.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('trainnings')
@Controller('trainnings')
export class TrainningsController {
  constructor(private readonly trainningsService: TrainningsService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Treino criado com sucesso!', type: UpdateTrainningDto })
  create(@Body() createTrainningDto: CreateTrainningDto) {
    return this.trainningsService.create(createTrainningDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Treinos!', type: UpdateTrainningDto, isArray: true })
  findAll() {
    return this.trainningsService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Treino!', type: UpdateTrainningDto })
  findOne(@Param('id') id: number) {
    return this.trainningsService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 201, description: 'Treino atualizado com sucesso!', type: UpdateTrainningDto })
  update(@Param('id') id: number, @Body() updateTrainningDto: UpdateTrainningDto) {
    return this.trainningsService.update(id, updateTrainningDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({
    status: 201, description: 'Treino removido com sucesso!', type: DeleteTrainningDto
  })
  remove(@Param('id') id: number) {
    return this.trainningsService.remove(id);
  }
}
