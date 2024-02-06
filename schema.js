export const typeDefs = `#graphql
    type Game{
        id: ID! #can't be null because of '!'
        title: String
        platform: [String!]! #Array of strings, two '!' indicates that the value inside the array cant be null as well as the array can't be null as well
        reviews:[Review!]
    }
    type Review{
        id:ID!
        rating: Int!
        content: String!
        author:Author!
        game:Game!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
        reviews:[Review!]!,
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
    type Mutation{
        deleteGame(id : ID!):[Game]
        addGame(game:GameInput!):Game        #Will be expecting game as an arguement which has a type GameInput. This arguement is required in order to create add a game
        updateGame(id:ID!, edits:EditGameInput!):Game
    }
    input GameInput{
        title: String!,
        platform:[String!]!
    }
    input EditGameInput{
        title:String,
        platform:[String!]          # not marking these 2 fields as required
    }
`