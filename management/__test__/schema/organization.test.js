const { createTestClient } = require('apollo-server-testing');
const { gql, ApolloServer } = require("apollo-server")

const { resolvers, typeDefs } = require("../../schema")

const mocks = {
  ID: () => "123",
  Status: () => "PENDING",
  DateTime: () => new Date('2021-05-01'),
}

const server = new ApolloServer({ resolvers, typeDefs, mocks });
const { query } = createTestClient(server);

const LIST_ORGANIZATIONS = gql`
  query ListOrganizations($nextToken: String, $limit: Int) {
    listOrganizations(nextToken: $nextToken, limit: $limit) {
      items {
        id
        name
        slug
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`

const GET_ORGANIZATION = gql`
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      slug
      status
      createdAt
      updatedAt
    }
  }
`

describe('Organization', () => {
  describe('Query', () => {
    it('should list organizations', async () => {
      const result = await query({
        query: LIST_ORGANIZATIONS,
      });

      expect(result).toMatchSnapshot()
    })
  })

  it('should get one organization', async () => {
    const result = await query({
      query: GET_ORGANIZATION,
      variables: { id: 1 }
    });

    expect(result).toMatchSnapshot()
  })
})
