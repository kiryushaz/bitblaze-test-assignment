import { Module } from '@nestjs/common';
import { DriveModule } from './drive/drive.module';
import { VolumeGroupModule } from './vg/vg.module';
import { VolumeModule } from './volume/volume.module';

@Module({
  imports: [DriveModule, VolumeGroupModule, VolumeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
