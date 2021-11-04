import 'reflect-metadata';

import path from 'path';

import { ApolloServer } from "apollo-server";
import { buildSchemaSync } from 'type-graphql'

const schema = buildSchemaSync({
    resolvers: [path.resolve('src/resolvers/cidade.resolver.ts')]
})

const server = new ApolloServer({ schema });

server.listen().then((url) => console.log(`Ta om em http://localhost:${url.port} essa merda!`))