require("dotenv").config();
import { ApolloServer, gql, PubSub } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { isAuth } from "./middlewares";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";

const startServer = async () => {
  const app = express();
  app.use(cors());
  app.use(isAuth);
  const server = new ApolloServer({
    typeDefs: gql`
      ${typeDefs}
    `,
    resolvers,
    context: req => {
      return req;
    }
  });

  server.applyMiddleware({ app });
  await mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  app.listen({ port: process.env.PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
    )
  );
};

startServer();
