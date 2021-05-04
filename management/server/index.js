const { ApolloServer } = require("apollo-server")
const schema = require("../schema")

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer(schema);

module.exports = {
  server
}
