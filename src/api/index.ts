import { importSchema } from "graphql-import";
import user from "./user/user.resolvers";

const resolvers = {
  Query: {
    ...user.Query
  },
  Mutation: {
    ...user.Mutation
  },
  User: {}
};

const typeDefs = importSchema(`${__dirname}/schema.graphql`);

export default {
  typeDefs,
  resolvers,
  context: {}
};
