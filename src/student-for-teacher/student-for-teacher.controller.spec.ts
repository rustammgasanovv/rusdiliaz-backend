import { Test, TestingModule } from '@nestjs/testing';
import { StudentForTeacherController } from './student-for-teacher.controller';

describe('StudentForTeacherController', () => {
  let controller: StudentForTeacherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentForTeacherController],
    }).compile();

    controller = module.get<StudentForTeacherController>(StudentForTeacherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
