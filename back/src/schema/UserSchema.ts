import { gql } from 'apollo-server-express';

const User = gql`
  type User {
    id: Int!
    email: String!
    username: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    register(email: String!, username: String!, password: String!): User
    login(email: String!, password: String!): User
    logout: Boolean
  }
`;

export default User;
