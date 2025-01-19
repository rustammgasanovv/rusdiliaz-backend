import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TopicService } from './topic.service';
import { Topic } from '@prisma/client';

@Controller('topics')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Post()
  create(@Body() createTopicDto: { title: string }): Promise<Topic> {
    return this.topicService.create(createTopicDto.title);
  }

  @Get()
  findAll(): Promise<Topic[]> {
    return this.topicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Topic | null> {
    return this.topicService.findOne(id);
  }
}
