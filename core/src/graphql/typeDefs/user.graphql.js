export default `
  type Message {
    message: String!
  }
  type User {
    id: ID
    displayName: String
    displayPicture: String
    email: String
  }

  type AuthData {
    id: ID
    accessToken: String
    refreshToken: String
  }

  type Query {
    loginWithEmailAndPassword(email: String!, password: String!): AuthData
    me(id: ID!): User
  }

  type Mutation {
    createUserWithEmailAndPassword(email: String!, password: String!): Message
  }
`;
