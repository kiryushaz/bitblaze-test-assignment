import { Controller, Post, Get, Body } from '@nestjs/common';
import { VolumeService } from './volume.service';
import { CreateVolumeDto } from './dto/create-volume.dto';
import { ApiHeader, ApiResponse } from '@nestjs/swagger';
import { ListVolumeDto } from './dto/list-volume.dto';

@Controller('/api/volume')
export class VolumeController {
  constructor(private volumeService: VolumeService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Логический том успешно создан'})
  @ApiResponse({ status: 400, description: 'Некорректный ввод данных в теле запроса'})
  @ApiResponse({ status: 403, description: 'Недостаточно прав для выполнения команды'})
  @ApiResponse({ status: 500, description: 'Внутренняя ошибка сервера'})
  async create(@Body() createVGDto: CreateVolumeDto) {
    return this.volumeService.create(createVGDto);
  }

  @ApiResponse({ 
    status: 200,
    type: ListVolumeDto,
    description: 'Выводит список созданных логических томов'
  })
  @ApiResponse({ status: 403, description: 'Недостаточно прав для выполнения команды'})
  @ApiResponse({ status: 500, description: 'Внутренняя ошибка сервера'})
  @Get()
  list() {
    return this.volumeService.list();
  }
}
