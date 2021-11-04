import { GraphQLInt } from "graphql";
import { Field, ObjectType, Query, Resolver } from "type-graphql";

@Resolver()
export class CidadeResolver {

    @Query(() => [CityResponse])
    public cidades(): CityResponse[] {
        return [
            {
                name: 'Cambé'
            },
            {
                id: 2,
                name: 'Londrina'
            }
        ]
    }
}

@ObjectType()
export class CityResponse {
    @Field(() => GraphQLInt, { nullable: true })
    id?: number;

    @Field()
    name: string;
}