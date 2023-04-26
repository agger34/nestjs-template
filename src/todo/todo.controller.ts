import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreateTodoDto, ResponseTodoDto, UpdateTodoDto } from './todo.dto';
import { TodoService } from './todo.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorator/auth.decorator';
import { UserRole } from 'src/shared/enum';
import { AuthGuard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/role.guard';

@ApiTags('todos')
@Controller('todos')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@Roles(UserRole.ADMIN)
export class TodoController {
  constructor(readonly todoService: TodoService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ResponseTodoDto,
  })
  async create(@Body() createTodoDto: CreateTodoDto): Promise<ResponseTodoDto> {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: [ResponseTodoDto],
  })
  findAll(): Promise<ResponseTodoDto[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ResponseTodoDto,
  })
  findById(@Param('id') id: string): Promise<ResponseTodoDto> {
    return this.todoService.findById(id);
  }

  @Put(':id')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ResponseTodoDto,
  })
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<ResponseTodoDto> {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.todoService.delete(id);
  }
}
