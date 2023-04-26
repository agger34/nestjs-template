import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ResponseAuthDto, ResponseProfileDto } from './auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(userName: string, password: string): Promise<ResponseAuthDto> {
    const user = await this.usersService.findOne(userName);
    if (user) {
      throw new BadRequestException("Username's exist.");
    }

    try {
      const createdUser = await this.usersService.create({
        userName: userName,
        password: password,
      });

      const payload = {
        userName: createdUser.userName,
        sub: createdUser.id,
        roles: createdUser.roles,
      };
      return {
        accessToken: await this.jwtService.signAsync(payload),
      } as ResponseAuthDto;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async signIn(userName: string, password: string): Promise<ResponseAuthDto> {
    const user = await this.usersService.findOne(userName);
    const isMatchPassword = await bcrypt.compare(password, user?.password);
    if (!isMatchPassword) {
      throw new UnauthorizedException();
    }
    const payload = {
      userName: user.userName,
      sub: user.id,
      roles: user.roles,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    } as ResponseAuthDto;
  }

  async getProfile(id: string): Promise<ResponseProfileDto> {
    const user = await this.usersService.findById(id);
    return {
      username: user.userName,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
