import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PrismaService } from 'prisma/prisma.service';
import { TopicModule } from './topic/topic.module';
import { QuestionService } from './question/question.service';
import { QuestionController } from './question/question.controller';
import { QuestionModule } from './question/question.module';
import { OptionModule } from './option/option.module';
import { UnitController } from './unit/unit.controller';
import { UnitService } from './unit/unit.service';
import { UnitModule } from './unit/unit.module';
import { ExamGradedService } from './exam-graded/exam-graded.service';
import { ExamGradedController } from './exam-graded/exam-graded.controller';
import { ExamGradedModule } from './exam-graded/exam-graded.module';
import { ConfigModule } from '@nestjs/config';
import { EssayThemasController } from './essay-themas/essay-themas.controller';
import { EssayThemasService } from './essay-themas/essay-themas.service';
import { EssayThemasModule } from './essay-themas/essay-themas.module';
import { SpeakingThemasService } from './speaking-themas/speaking-themas.service';
import { SpeakingThemasController } from './speaking-themas/speaking-themas.controller';
import { SpeakingThemasModule } from './speaking-themas/speaking-themas.module';
import { EssayUnitService } from './essay-unit/essay-unit.service';
import { EssayUnitController } from './essay-unit/essay-unit.controller';
import { EssayUnitModule } from './essay-unit/essay-unit.module';
import { SpeakingUnitService } from './speaking-unit/speaking-unit.service';
import { SpeakingUnitController } from './speaking-unit/speaking-unit.controller';
import { SpeakingUnitModule } from './speaking-unit/speaking-unit.module';
import { StudentUnitController } from './student-unit/student-unit.controller';
import { StudentUnitService } from './student-unit/student-unit.service';
import { StudentUnitModule } from './student-unit/student-unit.module';
import { StudentForTeacherController } from './student-for-teacher/student-for-teacher.controller';
import { StudentForTeacherService } from './student-for-teacher/student-for-teacher.service';


@Module({
  imports: [UserModule, TopicModule, QuestionModule, OptionModule, UnitModule, ExamGradedModule, EssayThemasModule, SpeakingThemasModule, EssayUnitModule, SpeakingUnitModule, StudentUnitModule],
  controllers: [AppController, QuestionController, UnitController, ExamGradedController, EssayThemasController, SpeakingThemasController, EssayUnitController, SpeakingUnitController, StudentUnitController, StudentForTeacherController],
  providers: [AppService, PrismaService, QuestionService, UnitService, ExamGradedService, EssayThemasService, SpeakingThemasService, EssayUnitService, SpeakingUnitService, StudentUnitService, StudentForTeacherService],
})
export class AppModule {}
