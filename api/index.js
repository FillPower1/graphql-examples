const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const schema = require('./schema')
const resolvers = require('./resolvers')

const api = express()

api.all('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
}))

module.exports = api
