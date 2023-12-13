import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    //where to get the pi data from
    schema:"http://localhost:4000",
    //where should the codegen check when generating types
    documents:["src/**/*.tsx"],
    //where to output generated types
    generates: {
        "./src/__generated__/":{
            preset:"client",
            presetConfig: {
                gqlTagName:"gql",
            }
        }
    },
};

export default config;