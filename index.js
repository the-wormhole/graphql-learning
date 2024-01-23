import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'
import { dns } from "googleapis/build/src/apis/dns/index.js";

//typedefs
import {typeDefs} from './schema.js'

//dummy database
import db from './_db.js'

const resolvers = {
    Query:{
        games(){
            return db.games;
        },
        reviews(){
            return db.reviews;
        },
        authors(){
            return db.authors;
        }
    }
}
// We define resolver functions and rest of the work will be done by the Apollo server 
//internally returning only the necessart fields passed in the request

const server = new ApolloServer({
    typeDefs,   //passing the typeDefs defined in the Schema to the Apollo Server
    resolvers   
})

const { url } = await startStandaloneServer(server,{
    listen:{ port: 4000}
})

console.log("Server initiated at port", 4000);