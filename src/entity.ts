import { createUnionType, Field, ObjectType } from "type-graphql";
import {UnionMetadata} from "type-graphql/dist/metadata/definitions";
import {UnionFromClasses} from "type-graphql/dist/helpers/utils";

@ObjectType()
export class User {
    @Field()
    email: string;

    @Field()
    firstName: string;
}

@ObjectType()
export class UserNotFoundProblem {
    @Field()
    public email: string;
}

export const UserResultUnionType = createUnionType({
    name: 'UserResultUnionType',

    description: 'User or problems',

    types: () => [
        User,
        UserNotFoundProblem
    ],

    resolveType: value => {
        switch (true) {
            case value instanceof User:
                return User;
            case value instanceof UserNotFoundProblem:
                return UserNotFoundProblem;
            default:
                return null;
        }
    }
});
