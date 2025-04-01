import { ApiProperty } from "@nestjs/swagger";

export class CreateVolumeGroupDto {
  @ApiProperty({
    type: String,
    example: "vg01"
  })
  name: string;

  @ApiProperty({
    type: String,
    example: ["/dev/sda1", "dev/sda2"]
  })
  drives: string[];
}