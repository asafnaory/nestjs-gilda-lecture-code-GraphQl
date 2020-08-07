import { InputType, Field } from "@nestjs/graphql";
import { MinLength } from "class-validator";



// Input type is the equivalent to data transfer object (DTO) in REST
@InputType()
export class CreateEmployeeInput {
    @Field()
    id: string

    @MinLength(1)
    @Field()
    name: string

    @Field()
    salary: number
}