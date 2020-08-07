import { Injectable } from "@nestjs/common";
import { EmployessDB } from "../../db/employees"
import { EmployeeType } from "./employee.type";

@Injectable()
export class EmployessService {
    constructor(private employeesDB: EmployessDB) { }

    getEmployees(): EmployeeType[] {
        return this.employeesDB.getEmployees();
    }

    getEmployeeById(id: string): EmployeeType {
        return this.employeesDB.getEmployeeById(id);
    }

    addEmployee(createEmployeeInput: EmployeeType): EmployeeType[] {
        return this.employeesDB.addEmployee(createEmployeeInput);
    }
}
