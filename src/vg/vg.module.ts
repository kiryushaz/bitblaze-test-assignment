import { Module } from '@nestjs/common';
import { VolumeGroupController } from './vg.controller';
import { VolumeGroupService } from './vg.service';

@Module({
  controllers: [VolumeGroupController],
  providers: [VolumeGroupService],
  exports: [VolumeGroupService]
})
export class VolumeGroupModule {}
