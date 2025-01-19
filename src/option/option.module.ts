import { Module } from '@nestjs/common';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [OptionController],
  providers: [OptionService, PrismaService],
})
export class OptionModule {}
