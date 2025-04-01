import { ApiProperty } from "@nestjs/swagger";

export class ListVolumeDto {
  @ApiProperty({
    type: String,
    example: "lv01"
  })
  lv_name: string;

  @ApiProperty({
    type: String,
    example: "vg01"
  })
  vg_name: string;

  @ApiProperty({
    type: String,
    example: "-wi-a-----"
  })
  lv_attr: string;

  @ApiProperty({
    type: String,
    example: "1,00m"
  })
  lv_size: string;
}
