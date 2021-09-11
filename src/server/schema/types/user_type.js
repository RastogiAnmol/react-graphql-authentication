const graphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphQL;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: {type: GraphQLID},
        email: {type: GraphQLString}
    }
})

module.exports = UserType;