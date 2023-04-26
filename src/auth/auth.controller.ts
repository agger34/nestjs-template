import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ResponseAuthDto, SignInDto, SignUpDto } from './auth.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto): Promise<ResponseAuthDto> {
    return this.authService.signUp(signUpDto.userName, signUpDto.password);
  }

  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto): Promise<ResponseAuthDto> {
    return this.authService.signIn(signInDto.userName, signInDto.password);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return this.authService.getProfile(req.user?.sub);
  }
}
