import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema";


/**
 * Mock data
 */
const mocks = {
    //Query a given number of mock data in the defined format
    Query:()=>({
tracksForHome:()=>[...new Array(12)]
    }),
    Track: () => ({
      id: () => "track_01",
      title: () => "Astro Kitty, Space Explorer",
      author: () => {
        return {
          name: "Grumpy Cat",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 1210,
      modulesCount: () => 6,
    }),
  };

/**
 * Create an instance of the server with the schema on
 */
async function startApolloServer (){
    const server = new ApolloServer({
        //Generating an executable schema from our type definitions
        schema:addMocksToSchema({
            schema:makeExecutableSchema({typeDefs}),
            mocks
        })
    });
    const {url} = await startStandaloneServer(server);
    console.log(`
    Server is running and querying at ${url}
    `)
}
startApolloServer();