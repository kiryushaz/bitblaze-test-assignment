import { Controller, Post, Get } from '@nestjs/common';
import { DriveService } from './drive.service';
import { Drive } from './interfaces/drive.interface';
import { ApiResponse } from '@nestjs/swagger';
import { ListDriveInfo } from './dto/list-drive.dto';

@Controller('/api/drive')
export class DriveController {
  constructor(private driveService: DriveService) {}

  @ApiResponse({ 
    status: 200, 
    type: ListDriveInfo,
    example: [
      {
        "NAME": "/dev/sda",
        "SIZE": "10G",
        "LABEL": "",
        "FSTYPE": "",
        "MOUNTPOINT": ""
      },
      {
        "NAME": "/dev/sda1",
        "SIZE": "1G",
        "LABEL": "",
        "FSTYPE": "LVM2_member",
        "MOUNTPOINT": ""
      },
      {
        "NAME": "/dev/mapper/vg01-lv01",
        "SIZE": "1M",
        "LABEL": "",
        "FSTYPE": "",
        "MOUNTPOINT": ""
      },
      {
        "NAME": "/dev/sda2",
        "SIZE": "1G",
        "LABEL": "",
        "FSTYPE": "LVM2_member",
        "MOUNTPOINT": ""
      },
      {
        "NAME": "/dev/sda3",
        "SIZE": "1G",
        "LABEL": "",
        "FSTYPE": "LVM2_member",
        "MOUNTPOINT": ""
      },
      {
        "NAME": "/dev/sda4",
        "SIZE": "1G",
        "LABEL": "",
        "FSTYPE": "LVM2_member",
        "MOUNTPOINT": ""
      }
    ],
    description: 'Выводит список подключенных к системе дисков'})
  @Get()
  async list(): Promise<Drive[]> {
    return this.driveService.list();
  }
}
