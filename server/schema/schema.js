const { projects, clients } = require('../sampleData');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = require('graphql');

const Client = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})

const Rootquery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: Client,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return clients.find(client => client.id === args.id);
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: Rootquery
})