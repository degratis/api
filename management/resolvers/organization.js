const resolver = {
  Query: {
    listOrganizations: async (_source, { id }, { db }) => { },
    searchOrganizations: async (_source, { id }, { db }) => { },
    getOrganization: async (_source, { id }, { db }) => { },
  },
  Mutation: {
    createOrganization: async (_source, { input }, { db }) => { },
    updateOrganization: async (_source, { input }, { db }) => { },
    deleteOrganization: async (_source, { input }, { db }) => { },
  },
};

module.exports = resolver;
