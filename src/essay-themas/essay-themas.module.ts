import { Module } from '@nestjs/common';
import { EssayThemasController } from './essay-themas.controller';
import { EssayThemasService } from './essay-themas.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [EssayThemasController],
  providers: [EssayThemasService, PrismaService],
})
export class EssayThemasModule {}
