import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'

import {typeDefs} from './schema.js'

const server = new ApolloServer({
    typeDefs,   //passing the typeDefs defined in the Schema to the Apollo Server
    //resolvers
})

const { url } = await startStandaloneServer(server,{
    listen:{ port: 4000}
})

console.log("Server initiated at port", 4000);