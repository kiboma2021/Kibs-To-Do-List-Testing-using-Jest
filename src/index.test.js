const { addTodo, removeTodo } = require('./index.js')

describe('To Do List', () => {
    test('new item in List', () => {
        const newItem = new addTodo('TestValue');
        expect(newItem.toDovalue).toBe('TestValue');
    })
})