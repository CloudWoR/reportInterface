import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PacsService } from './pacs.service';
import { CreatePacDto } from './dto/create-pac.dto';
import { UpdatePacDto } from './dto/update-pac.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('pacs')
@ApiTags('pacs本地数据库')
export class PacsController {
  constructor(private readonly pacsService: PacsService) {}

  @Get('initail')
  initail() {
    return this.pacsService.initailLocalPacsdb();
  }

  @Post()
  create(@Body() createPacDto: CreatePacDto) {
    return this.pacsService.create(createPacDto);
  }

  // @Get()
  // findAll() {
  //   return this.pacsService.findAll();
  // }

  @Get(':date')
  findOne(@Param('date') date: string) {
    return this.pacsService.findDay(date);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePacDto: UpdatePacDto) {
    return this.pacsService.update(+id, updatePacDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacsService.remove(+id);
  }
}
