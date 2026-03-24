import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoItemList extends Component {
    render() {
        const { todosArr, myToggle, myRemove } = this.props;
        const todoList = todosArr.map(({id,text,checked}) => (
            <TodoItem 
                id={id} 
                text={text} 
                checked={checked} 
                key={id}
                onToggle={myToggle}
                onRemove={myRemove}
            />
        ));

        return (
            <div>
                {/* <TodoItem text="오늘의 할일1" checked={false} />
                <TodoItem text="오늘의 할일2" checked={true} /> */}
                {todoList}
            </div>
        );
    }
}

TodoItemList.propTypes = {
    todosArr: PropTypes.array,
    myToggle: PropTypes.func,
    myRemove: PropTypes.func
};
export default TodoItemList;