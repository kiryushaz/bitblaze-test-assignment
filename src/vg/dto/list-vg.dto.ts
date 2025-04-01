import { ApiProperty } from "@nestjs/swagger";

export class ListVolumeGroupDto {
  @ApiProperty({
    type: String,
    example: "vg01"
  })
  vg_name: string;

  @ApiProperty({
    type: Number,
    example: 4
  })
  pv_count: number;

  @ApiProperty({
    type: Number,
    example: 1
  })
  lv_count: number;

  @ApiProperty({
    type: Number,
    example: 0
  })
  snap_count: number;

  @ApiProperty({
    type: String,
    example: "wz--n-"
  })
  vg_attr: string;

  @ApiProperty({
    type: String,
    example: "3,98g"
  })
  vg_size: string;

  @ApiProperty({
    type: String,
    example: "3,98g"
  })
  vg_free: string;
}