const { projects, clients } = require('../sampleData');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
//Client and Project db Schemas
const Clients = require("../models/Clients");
const Project = require("../models/Project");
// Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        clientId: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client:{
            type: Client,
            resolve(parent, args){
                return clients.findById(parent.clientId)
            }
        }
    })
})


// Client Type
const Client = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})

// Root Query
const Rootquery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find();
            }


        },
        project:{
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Project.findById(args.id)
            }

        },
        clients:{
            type: new GraphQLList(Client),
            resolve(parent, args){
                return Clients.find();
            }
        },
        client: {
            type: Client,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Clients.findById(args.id);
            }
        }
    }
})
// Mutations

const mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        addClients:{
            type:Client,
            args:{
                name:{ type: GraphQLNonNull(GraphQLString) },
                email:{ type: GraphQLNonNull(GraphQLString) },
                phone:{ type: GraphQLNonNull(GraphQLString)  },

            },
            resolve(parent, args){
                const clients = new Clients({
                    name:args.name,
                    email:args.email,
                    phone:args.phone,
                });

                return clients.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Rootquery,
    mutation
})