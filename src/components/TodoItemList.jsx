import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todosArr, myToggle, myRemove } = this.props;
        const todoList = todosArr.map();

        return (
            <div>
                {/* <TodoItem text="오늘의 할일1" checked={false} />
                <TodoItem text="오늘의 할일2" checked={true} /> */}
                {todoList}
            </div>
        );
    }
}
export default TodoItemList;