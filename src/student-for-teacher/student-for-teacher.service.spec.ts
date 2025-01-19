import { Test, TestingModule } from '@nestjs/testing';
import { StudentForTeacherService } from './student-for-teacher.service';

describe('StudentForTeacherService', () => {
  let service: StudentForTeacherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentForTeacherService],
    }).compile();

    service = module.get<StudentForTeacherService>(StudentForTeacherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
