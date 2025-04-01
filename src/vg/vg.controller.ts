import { Controller, Post, Get, Body } from '@nestjs/common';
import { VolumeGroupService } from './vg.service';
import { CreateVolumeGroupDto } from './dto/create-vg.dto';
import { ApiResponse } from '@nestjs/swagger';
import { ListVolumeGroupDto } from './dto/list-vg.dto';


@Controller('/api/vg')
export class VolumeGroupController {
  constructor(private volumeGroupService: VolumeGroupService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Группа томов успешно создана'})
  @ApiResponse({ status: 400, description: 'Некорректный ввод данных в теле запроса'})
  @ApiResponse({ status: 403, description: 'Недостаточно прав для выполнения команды'})
  @ApiResponse({ status: 500, description: 'Внутренняя ошибка сервера'})
  async create(@Body() createVGDto: CreateVolumeGroupDto) {
     return this.volumeGroupService.create(createVGDto);
  }

  @Get()
  @ApiResponse({ 
    status: 200, 
    type: ListVolumeGroupDto,
    description: 'Выводит список созданных групп томов'
  })
  @ApiResponse({ status: 403, description: 'Недостаточно прав для выполнения команды'})
  @ApiResponse({ status: 500, description: 'Внутренняя ошибка сервера'})
  async list() {
    return this.volumeGroupService.list();
  }
}
