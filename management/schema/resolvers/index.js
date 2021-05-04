const _ = require("lodash");
const organization = require("./organization");
const { DateTimeResolver } = require("graphql-scalars");

const nullResolver = {
  __resolveType() {
    return null;
  }
}

const resolvers = _.merge(organization, {
  Model: nullResolver,
  Connection: nullResolver,
  DateTime: DateTimeResolver
});

module.exports = [resolvers];
