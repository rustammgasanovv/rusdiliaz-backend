import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { EssayThemas } from '@prisma/client';

@Injectable()
export class EssayThemasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { 
    level: string; 
    theme: string; 
  }): Promise<EssayThemas> {
    return this.prisma.essayThemas.create({
      data,
    });
  }

  async findAll(): Promise<EssayThemas[]> {
    return this.prisma.essayThemas.findMany();
  }

  async findOne(id: string): Promise<EssayThemas | null> {
    return this.prisma.essayThemas.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: { 
    level?: string; 
    theme?: string; 
  }): Promise<EssayThemas> {
    return this.prisma.essayThemas.update({
      where: { id },
      data,
    });
  }
}


// generator client {
//   provider = "prisma-client-js"
// }

// datasource db {
//   provider = "mongodb"
//   url      = env("DATABASE_URL")
// }

// model User {
//   id         String   @id @default(auto()) @map("_id") @db.ObjectId
//   first_name String   @map("first_name")
//   last_name  String   @map("last_name")
//   img        String
//   email      String   @unique
//   phone      String   @unique
//   password   String
//   role       String
//   level      String
//   createdAt  DateTime? @default(now())
//   updatedAt  DateTime?
// }

// model ExamGraded {
//   id         String   @id @default(auto()) @map("_id") @db.ObjectId
//   student_id String
//   exam_id    String
//   title      String
//   points     String
//   status     Boolean
//   createdAt  DateTime? @default(now())
//   updatedAt  DateTime?
// }

// model Topic {
//   id         String   @id @default(auto()) @map("_id") @db.ObjectId
//   title      String
//   createdAt  DateTime? @default(now())
//   updatedAt  DateTime?
// }

// model Unit {
//   id        String   @id @default(auto()) @map("_id") @db.ObjectId
//   title     String
//   topicId   String   @db.ObjectId
//   createdAt DateTime @default(now())
//   updatedAt DateTime?
// }


// model Question {
//   id           String   @id @default(auto()) @map("_id") @db.ObjectId
//   questionText String
//   unitId      String   @db.ObjectId
//   createdAt    DateTime? @default(now())
//   updatedAt    DateTime?
// }

// model Option {
//   id         String   @id @default(auto()) @map("_id") @db.ObjectId
//   text       String
//   type       Boolean
//   questionId String   @db.ObjectId
//   createdAt  DateTime? @default(now())
//   updatedAt  DateTime?
// }

// model essays {
//   id       String @id @default(auto()) @map("_id") @db.ObjectId
//   v        Int    @map("__v")
//   essay    String
//   feedback String
//   level    String
//   score    Json
//   topic    String
//   userId   String
// }

// model EssayThemas {
//   id       String @id @default(auto()) @map("_id") @db.ObjectId
//   level String
//   theme String
// }

// model SpeakingThemas {
//   id       String @id @default(auto()) @map("_id") @db.ObjectId
//   level String
//   theme String
// }

