import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { EmployeeType } from "./employee.type";
import { EmployessService } from "./employee.service";
import { CreateEmployeeInput } from "./create-employee.input";

@Resolver(of => EmployeeType)
export class EmployeeResolver {
    constructor(private employeesService: EmployessService) { }

    @Query(returns => [EmployeeType])
    emplpyees(
    ) {
        return this.employeesService.getEmployees()
    }
    @Query(returns => EmployeeType)
    emplpyee(
        @Args('id') id: string
    ) {
        return this.employeesService.getEmployeeById(id);
    }

    @Mutation(returns => [EmployeeType])
    createEmployee(
        @Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput
    ) {
        return this.employeesService.addEmployee(createEmployeeInput)
    }
}