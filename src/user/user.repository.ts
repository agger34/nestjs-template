import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto, ResponseUserDto } from './user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    const createdUser = new this.userModel({
      ...createUserDto,
    });
    return createdUser.save();
  }

  async findAll(): Promise<ResponseUserDto[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<ResponseUserDto> {
    return this.userModel.findById(id).exec();
  }

  async findOne(username: string): Promise<ResponseUserDto> {
    return this.userModel.findOne({ username }).exec();
  }
}
