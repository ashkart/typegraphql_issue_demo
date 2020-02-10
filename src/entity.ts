import { createUnionType, Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field()
    email: string;

    @Field()
    firstName: string;
}

export class UserNotFoundProblem {
    constructor(public readonly email: string) {
    }

}

export const UserResultType = createUnionType({
    name: 'UserResultType',

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
