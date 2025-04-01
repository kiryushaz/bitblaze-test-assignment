import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { spawnSync } from 'node:child_process';
import { VolumeGroup } from './interfaces/vg.interface';

@Injectable()
export class VolumeGroupService {
  create(vg: VolumeGroup) {
    const child = spawnSync('vgcreate', [vg.name, ...vg.drives]);

    if (child.error) {
      throw new HttpException(`${child.error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    if (child.status !== 0) {
      throw new HttpException(child.stderr.toString().trim(), HttpStatus.BAD_REQUEST);
    }

    return child.stdout.toString().trim();
  }

}
