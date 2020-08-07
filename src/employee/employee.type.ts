import { ObjectType, Field, ID } from "@nestjs/graphql";

// ObjectType for the resolver which needs to know the type it resolves
// when we give this decorator an argument we change the name of this ObjectType from EmployeeType to the argument. in this case Employee ->
// -> we can see it in the graphql playgraund  SCHEMA - the type will be employee and not EmployeeType


@ObjectType('Employee')
export class EmployeeType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    salary: number;
}