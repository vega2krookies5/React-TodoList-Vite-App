import React, { Component } from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';

class TodoItem extends Component {
     /*
        라이프사이클 메서드
        shouldComponentUpdate(nextProps, nextState) 함수는 렌더링 생략 여부를 결정하는 bool 값을 리턴함
        true 리턴 (checked 변수에 변동이 있는 경우(같지 않으면))면 render() 함수가 호출됨
        false 리턴 (checked 변수에 변동이 없는 경우(같으면))면 render() 함수가 호출되지 않음(렌더링 생략)
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

TodoItem.propTypes = {
    text: PropTypes.string,
    checked: PropTypes.bool,
    id: PropTypes.number,
    onToggle: PropTypes.func,
    onRemove: PropTypes.func
};
export default TodoItem