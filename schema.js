export const typeDefs = `#graphql
    type Game{
        id: ID! #can't be null because of '!'
        title: String
        platform: [String!]! #Array of strings, two '!' indicates that the value inside the array cant be null as well as the array can't be null as well
    }
    type Review{
        id:ID!
        rating: Int!
        content: String!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query{
        reviews:[Review]
        review(id : ID!):Review
        games:[Game]
        game(id : ID!):Game
        authors:[Author]
        author(id : ID!):Author
        #author:Author
    }
`