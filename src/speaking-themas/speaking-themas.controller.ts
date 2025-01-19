import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { SpeakingThemasService } from './speaking-themas.service';
import { SpeakingThemas } from '@prisma/client';

@Controller('speaking-themas')
export class SpeakingThemasController {
  constructor(private readonly speakingThemasService: SpeakingThemasService) {}

  @Post()
  create(@Body() createSpeakingDto: { 
    level: string; 
    theme: string; 
  }): Promise<SpeakingThemas> {
    return this.speakingThemasService.create(createSpeakingDto);
  }

  @Get()
  findAll(): Promise<SpeakingThemas[]> {
    return this.speakingThemasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SpeakingThemas | null> {
    return this.speakingThemasService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpeakingDto: { 
      level?: string; 
      theme?: string; 
    }
  ): Promise<SpeakingThemas> {
    return this.speakingThemasService.update(id, updateSpeakingDto);
  }
}