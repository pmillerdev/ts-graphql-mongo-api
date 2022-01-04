import { gql } from "apollo-server";

import noteSchema from "./note";
import customSchema from "./custom";

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, noteSchema, customSchema];
