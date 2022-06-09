/**
 * @jest-environment jsdom
 */

const addTodo = require('./index.js');

describe('To Do List', () => {
    test('new item in List', () => {
        const newItem =  addTodo('TestValue');
        expect(newItem[0][1]).toBe('TestValue');
    })
})
