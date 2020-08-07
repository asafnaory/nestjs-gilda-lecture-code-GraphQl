import { EmployeeType } from "../src/employee/employee.type";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EmployessDB {
    private employees: EmployeeType[] = [
        {
            id: '1',
            name: 'Asaf Naory', 
            salary: 1000000
        },{
            id: '2',
            name: 'Avraham Hemo', 
            salary: 1000000
        },{
            id: '3',
            name: 'Michael Jordan', 
            salary: 36000000
        },{
            id: '4',
            name: 'Lebron James', 
            salary: 37000000
        },{
            id: '5',
            name: 'Drake', 
            salary: 470000000
        },{
            id: '6',
            name: 'J Cole ', 
            salary: 35000000
        }
    ]

    getEmployees(): EmployeeType[]{ 
        return this.employees; 
    }
    
    getEmployeeById(id: string): EmployeeType { 

        const employee = this.employees.find((employee) => employee.id === id)
        console.log(employee)

        return employee; 
    }

    addEmployee(newEmployee : EmployeeType): EmployeeType[] {

        this.employees = [...this.employees, newEmployee]
        return this.employees; 
    }

}