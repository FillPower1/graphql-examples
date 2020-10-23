const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Step {
        title: String!,
        completed: Boolean!
    }

    type Todo {
        id: ID!
        title: String!
        completed: Boolean!
        steps: [Step]
    }

    type Query {
        todo(id: ID!): Todo,
        todos: [Todo]!
        completedTodos: [Todo]
        uncompletedTodos: [Todo]
    }
`)
