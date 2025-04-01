import { Controller, Post, Get, Body } from '@nestjs/common';
import { VolumeService } from './volume.service';
import { CreateVolumeDto } from './dto/create-volume.dto';

@Controller('/api/volume')
export class VolumeController {
  constructor(private volumeService: VolumeService) {}

  @Post()
  async create(@Body() createVGDto: CreateVolumeDto) {
    return this.volumeService.create(createVGDto);
  }

}
