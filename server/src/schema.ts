import gql from "graphql-tag";

export const typeDefs=gql`
#Schema definitions
type Query{
    "Get array of non-null tracks"
    tracksForHome:[Track!]!
}
"single track definition"
type Track{
    id:ID!
    title:String!
    author:Author!
    thumbnail:String
    length:Int
    moduleCount:Int
}

"Author of complete track"
type Author{
    id:ID!
    name:String!
    photo:String
}
`