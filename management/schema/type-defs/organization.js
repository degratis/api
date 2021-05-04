const { gql } = require("apollo-server-core");

const type = gql`
  """ A Organization is a company which has e-commerce stores """
  type Organization implements Model {
    """ Unique cuid for object """
    id: ID!
    
    """ Organization Name """
    name: String!
    """ Organization slug (subdomain name) """
    slug: String!
    """ Organization status """
    status: Status!

    """ Creation date time """
    createdAt: DateTime
    """ Last update date time """
    updatedAt: DateTime
  }

  input CreateOrganizationInput {
    id: ID
    name: String!
    slug: String!
    status: Status
  }

  input UpdateOrganizationInput {
    id: ID!
    name: String
    slug: String
    status: Status
  }

  extend type Query {
    """ Recovery a list of organizations """
    listOrganizations(nextToken: String, limit: Int): OrganizationConnection
    """ Looking for organizations """
    searchOrganizations(id: ID!): OrganizationConnection
    """ Recovery an organizations """
    getOrganization(id: ID!): Organization
  }

  extend type Mutation {
    """ Create an organization """
    createOrganization(input: CreateOrganizationInput!): Organization
    """ Update an organization """
    updateOrganization(input: UpdateOrganizationInput!): Organization
    """ Delete an organization (soft-delete) """
    deleteOrganization(input: UpdateOrganizationInput!): ConfirmationResponse
  }

  type OrganizationConnection implements Connection {
    items: [Organization]
    nextToken: String
  }
`;

module.exports = type;
