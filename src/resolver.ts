import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User, UserNotFoundProblem, UserResultUnionType } from "./entity";

@Resolver(User)
export class UserResolver {
    @Query(() => User)
    getUser() {
        const user = new User();
        user.email = 'qwe@asd.ru';
        user.firstName = 'Fry';

        return user;
    }

    @Query(() => UserResultUnionType)
    async getUserWithUnion(@Arg('error') error: boolean) {
        const user = new User();
        user.email = 'qwe@asd.ru';
        user.firstName = 'Fry';

        return user;
    }
}
