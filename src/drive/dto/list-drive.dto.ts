import { ApiProperty } from "@nestjs/swagger";

export class ListDriveInfo {
  @ApiProperty({type: String})
  name: string;

  @ApiProperty({type: String})
  size: string;

  @ApiProperty({type: String})
  label: string;

  @ApiProperty({type: String})
  fstype: string;

  @ApiProperty({type: String})
  mountpoint: string;
}