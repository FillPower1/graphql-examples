const todos = require('./todos')

module.exports = {
    todo: ({ id }) => todos.find((todo) => todo.id == id),
    todos: () => todos,
    completedTodos: () => todos.filter(todo => todo.completed),
    uncompletedTodos: () => todos.filter(todo => !todo.completed)
}
