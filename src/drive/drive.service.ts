import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Drive } from './interfaces/drive.interface';
import { execSync } from 'node:child_process';

@Injectable()
export class DriveService {
  list(): Drive[] {
    const child = execSync(`lsblk --raw -p -o name,size,label,fstype,mountpoint | grep -v '/$' | jq -Rn '[ input | split(" ") as $head | inputs | split(" ") | to_entries | map(.key = $head[.key]) | from_entries ]'`);

    const drives: Drive[] = JSON.parse(child.toString());

    return drives;
  }
}
