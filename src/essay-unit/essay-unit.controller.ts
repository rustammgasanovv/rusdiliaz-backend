import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { EssayUnitService } from './essay-unit.service';
import { EssayUnit } from '@prisma/client';

@Controller('essay-units')
export class EssayUnitController {
  constructor(private readonly essayUnitService: EssayUnitService) {}

  @Post()
  create(@Body() createEssayUnitDto: { level: string; title: string }): Promise<EssayUnit> {
    return this.essayUnitService.create(createEssayUnitDto);
  }

  @Get()
  findAll(): Promise<EssayUnit[]> {
    return this.essayUnitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EssayUnit | null> {
    return this.essayUnitService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEssayUnitDto: { level?: string; title?: string }
  ): Promise<EssayUnit> {
    return this.essayUnitService.update(id, updateEssayUnitDto);
  }
}
