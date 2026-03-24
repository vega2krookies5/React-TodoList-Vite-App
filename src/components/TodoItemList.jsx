import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoItemList extends Component {
    /*
        true 리턴 (myTodos 변수에 변동이 있는 경우)이면 render() 함수가 호출됨
        false 리턴 (myTodos 변수에 변동이 없는 경우)이면 render() 함수가 호출되지 않음(렌더링 생략)
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todosArr !== nextProps.todosArr;
    }

    render() {
        const { todosArr, myToggle, myRemove } = this.props;
        const todoList = todosArr.map(({ id, text, checked }) => (
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