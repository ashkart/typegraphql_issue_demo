import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User, UserNotFoundProblem, UserResultType } from "./entity";

@Resolver(User)
export class UserResolver {
    @Query(() => User)
    getUser() {
        const user = new User();
        user.email = 'qwe@asd.ru';
        user.firstName = 'Fry';

        return user;
    }

    // @TODO: Uncomment this to reproduce the problem.

    /*

    @Query(() => UserResultType)
    getUserWithUnion(@Arg('error') error: boolean) {
        if (error === true) {
            return new UserNotFoundProblem('qwe@asd.ru');
        }

        const user = new User();
        user.email = 'qwe@asd.ru';
        user.firstName = 'Fry';

        return user;
    }

    */
}
