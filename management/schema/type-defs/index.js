const { gql } = require("apollo-server-core");
const organization = require("./organization");
const { DateTimeTypeDefinition } = require("graphql-scalars");

const type = gql`
  """
  Root Query
  """
  type Query {
    _: Boolean
  }

  """
  Root Mutation
  """
  type Mutation {
    _: Boolean
  }

  """
  Status enum
  """
  enum Status {
    ACTIVE,
    PENDING,
    BLOCKED
  }

  """
  Model interface
  """
  interface Model {
    id: ID!
    createdAt: DateTime
    updatedAt: DateTime
  }

  """
  Connection interface
  """
  interface Connection {
    """
    Token for pagination
    """
    nextToken: String
  }

  """
  Default message response
  """
  type ConfirmationResponse {
    message: String!
  }
`;

module.exports = [type, organization, DateTimeTypeDefinition];
