import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/graphql-sdk";

const client = new GraphQLClient("https://localhost/graphql", {
  credentials: "include",
});

export default getSdk(client);
