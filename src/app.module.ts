import { Module } from '@nestjs/common';
import { DriveModule } from './drive/drive.module';
import { VolumeGroupModule } from './vg/vg.module';

@Module({
  imports: [DriveModule, VolumeGroupModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
