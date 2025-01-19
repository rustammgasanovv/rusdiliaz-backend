import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { EssayThemasService } from './essay-themas.service';
import { EssayThemas } from '@prisma/client';

@Controller('essay-themas')
export class EssayThemasController {
  constructor(private readonly essayThemasService: EssayThemasService) {}

  @Post()
  create(@Body() createEssayDto: { 
    level: string; 
    theme: string; 
  }): Promise<EssayThemas> {
    return this.essayThemasService.create(createEssayDto);
  }

  @Get()
  findAll(): Promise<EssayThemas[]> {
    return this.essayThemasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EssayThemas | null> {
    return this.essayThemasService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEssayDto: { 
      level?: string; 
      theme?: string; 
    }
  ): Promise<EssayThemas> {
    return this.essayThemasService.update(id, updateEssayDto);
  }
}
