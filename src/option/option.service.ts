import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Option } from '@prisma/client';

@Injectable()
export class OptionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    text: string,
    type: boolean,
    questionId: string,
  ): Promise<Option> {
    return this.prisma.option.create({
      data: {
        text,
        type,
        questionId,
        createdAt: new Date(), 
        updatedAt: null,
      },
    });
  }

  async findAll(): Promise<Option[]> {
    return this.prisma.option.findMany();
  }

  async findByQuestion(questionId: string): Promise<Option[]> {
    return this.prisma.option.findMany({
      where: { questionId },
    });
  }
}
