import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, isNotEmpty } from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    description: 'The userName of account.',
    required: true,
  })
  @IsNotEmpty()
  userName: string;

  @ApiProperty({
    description: 'The password of account.',
    required: true,
  })
  @IsNotEmpty()
  password: string;
}

export class SignInDto extends SignUpDto {}

export class ResponseAuthDto {
  @ApiProperty({
    description: 'The accessToken of account.',
  })
  accessToken: string;
}

export class ResponseProfileDto {
  @ApiProperty({
    description: 'The userName of account.',
  })
  username: string;

  @ApiProperty({
    description: 'The createdAt of account.',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The updatedAt of account.',
  })
  updatedAt: Date;
}
