import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return {
      data: users,
      message: 'Usuarios obtenidos correctamente',
      success: true,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    return {
      data: user,
      message: 'Usuario obtenido correctamente',
      success: true,
    };
  }

  @Post()
  async create(@Body() body: { name: string; email: string }) {
    const user = await this.usersService.create(body);
    return {
      data: user,
      message: 'Usuario creado correctamente',
      success: true,
    };
  }
}
