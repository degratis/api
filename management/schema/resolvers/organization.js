const resolver = {
  Query: {
    listOrganizations:  (_source, {}, { db }) => { },
    searchOrganizations:  (_source, {}, { db }) => { },
    getOrganization:  (_source, { id }, { db }) => { },
  },
  Mutation: {
    createOrganization:  (_source, { input }, { db }) => { },
    updateOrganization:  (_source, { input }, { db }) => { },
    deleteOrganization:  (_source, { input }, { db }) => { },
  },
};

module.exports = resolver;
