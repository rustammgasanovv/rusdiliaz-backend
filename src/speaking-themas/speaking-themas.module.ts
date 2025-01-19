import { Module } from '@nestjs/common';
import { SpeakingThemasController } from './speaking-themas.controller';
import { SpeakingThemasService } from './speaking-themas.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [SpeakingThemasController],
  providers: [SpeakingThemasService, PrismaService],
})
export class SpeakingThemasModule {}