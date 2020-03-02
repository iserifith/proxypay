import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const typesArray = fileLoader(path.join(__dirname, "./typeDefs"));
const typeDefs = mergeTypes(typesArray, { all: true });

export { typeDefs };
