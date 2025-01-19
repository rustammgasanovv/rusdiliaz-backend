import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OptionService } from './option.service';
import { Option } from '@prisma/client';

@Controller('options')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @Post()
  create(
    @Body() createOptionDto: { text: string; type: boolean; questionId: string },
  ): Promise<Option> {
    const { text, type, questionId } = createOptionDto;
    return this.optionService.create(text, type, questionId);
  }

  @Get()
  findAll(): Promise<Option[]> {
    return this.optionService.findAll();
  }

  @Get('question/:questionId')
  findByQuestion(@Param('questionId') questionId: string): Promise<Option[]> {
    return this.optionService.findByQuestion(questionId);
  }
}
