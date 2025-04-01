import { ApiProperty } from "@nestjs/swagger";

export class CreateVolumeDto {
  @ApiProperty({
    type: String,
    example: "lv01"
  })
  name: string;

  @ApiProperty({
    type: String,
    example: "vg01"
  })
  vg_id: string;

  @ApiProperty({
    type: Number,
    example: 1048576
  })
  size: number;
}