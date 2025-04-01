import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { spawnSync } from 'node:child_process';
import { Volume } from './interfaces/volume.interface';

@Injectable()
export class VolumeService {
  create(lv: Volume) {
    const child = spawnSync('lvcreate', ['--name', lv.name, '--size', `${lv.size}b`, lv.vg_id]);
  
    if (child.error) {
      throw new HttpException(`${child.error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    if (child.status !== 0) {
      throw new HttpException(child.stderr.toString().trim(), HttpStatus.BAD_REQUEST);
    }
  
    return child.stdout.toString().trim();
  }
  
  list() {
    const child = spawnSync('lvs', ['--reportformat', 'json']);

    if (child.error) {
      throw new HttpException(`${child.error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    if (child.status !== 0) {
      throw new HttpException(child.stderr.toString().trim(), HttpStatus.BAD_REQUEST);
    }

    const json: Map<String, Object> = JSON.parse(child.stdout.toString());
    const vg = json["report"][0]["lv"];

    return vg;
  }
}
