import queryModules from "./queries";
import mutationModules from "./mutations";

export const resolvers = {
  Query: queryModules,
  Mutation: mutationModules
};
