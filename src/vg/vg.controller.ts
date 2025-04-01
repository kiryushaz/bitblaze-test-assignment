import { Controller, Post, Get, Body } from '@nestjs/common';
import { VolumeGroupService } from './vg.service';
import { CreateVolumeGroupDto } from './dto/create-vg.dto';


@Controller('/api/vg')
export class VolumeGroupController {
  constructor(private volumeGroupService: VolumeGroupService) {}

  @Post()
  async create(@Body() createVGDto: CreateVolumeGroupDto) {
     return this.volumeGroupService.create(createVGDto);
  }

  @Get()
  async list() {
    return this.volumeGroupService.list();
  }
}
