import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'

//typedefs
import {typeDefs} from './schema.js'

//dummy database
import db from './_db.js'

const resolvers = {
    Query:{
        games(){
            return db.games;
        },
        game(_,args){

            return db.games.find((game) => game.id === args.id)
        },
        reviews(){
            return db.reviews;
        },
        review(_,args){

            return db.reviews.find((review) => {return review.id === args.id});
            // above line can be like this as well :- (review) => review.id === args.id
        },
        authors(){
            return db.authors;
        },
        author(_,args){
            return db.authors.find((author) => author.id === args.id);
            //return db.authors.find((author) => author.id === "1")
        }
    }
}
// We define resolver functions and rest of the work will be done by the Apollo server 
//internally returning only the necessary fields passed in the request

const server = new ApolloServer({
    typeDefs,   //passing the typeDefs defined in the Schema to the Apollo Server
    resolvers   
})

const { url } = await startStandaloneServer(server,{
    listen:{ port: 4000}
})

console.log("Server initiated at port", 4000);