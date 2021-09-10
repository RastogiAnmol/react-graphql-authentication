const graphQL = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphQL;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        email: {type: GraphQLString}
    }
})

module.exports = UserType;