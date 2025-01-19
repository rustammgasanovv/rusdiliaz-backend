import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { UnitService } from './unit.service';
import { Unit } from '@prisma/client';

@Controller('units')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Post()
  create(@Body() createUnitDto: { title: string; topicId: string }): Promise<Unit> {
    return this.unitService.create(createUnitDto.title, createUnitDto.topicId);
  }

  @Get()
  findAll(): Promise<Unit[]> {
    return this.unitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Unit | null> {
    return this.unitService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnitDto: { title: string; topicId?: string },
  ): Promise<Unit> {
    return this.unitService.update(id, updateUnitDto.title, updateUnitDto.topicId);
  }
}
