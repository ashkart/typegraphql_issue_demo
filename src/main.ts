import "reflect-metadata";
import * as express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { BuildSchemaOptions } from "type-graphql";
import {UserResolver} from "./resolver";

const main = async () => {
    try {
        const schema = await buildSchema({
            resolvers: [UserResolver]
        });

        initServer(schema);
    } catch (e) {
        console.error(e);
    }
};

const initServer = async (schema: GraphQLSchema) => {
    const path = "/";

    const apolloServer = new ApolloServer({
        schema,
        playground: true
    });

    const { url } = await apolloServer.listen(4000);

    console.log(`Server is running, GraphQL Playground available at ${url}`);
};

main();
