import { Module } from '@nestjs/common';
import { EmployeeResolver } from './employee.resolver';
import { EmployessService } from './employee.service';
import { EmployessDB } from 'db/employees';

@Module({

  providers: [
    EmployeeResolver,
    EmployessService,
    EmployessDB
  ],
  exports: []
})
export class EmployeeModule { }