import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { SpeakingUnitService } from './speaking-unit.service';
import { SpeakingUnit } from '@prisma/client';

@Controller('speaking-units')
export class SpeakingUnitController {
  constructor(private readonly speakingUnitService: SpeakingUnitService) {}

  @Post()
  create(@Body() createSpeakingUnitDto: { level: string; title: string }): Promise<SpeakingUnit> {
    return this.speakingUnitService.create(createSpeakingUnitDto);
  }

  @Get()
  findAll(): Promise<SpeakingUnit[]> {
    return this.speakingUnitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SpeakingUnit | null> {
    return this.speakingUnitService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpeakingUnitDto: { level?: string; title?: string }
  ): Promise<SpeakingUnit> {
    return this.speakingUnitService.update(id, updateSpeakingUnitDto);
  }
}
