import { Controller, Post, Get } from '@nestjs/common';
import { DriveService } from './drive.service';
import { Drive } from './interfaces/drive.interface';

@Controller('/api/drive')
export class DriveController {
  constructor(private driveService: DriveService) {}

  @Get()
  async list(): Promise<Drive[]> {
    return this.driveService.list();
  }
}
