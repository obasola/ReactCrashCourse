import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle() {
        if(this.props.todo.completed) {
            return {
                width: '475px',
                background: '#C9A69E',
                padding: '10px',
                borderBottom: '1px #E7B5AA dotted',
                textDecoration: this.props.todo.completed ? 'line-through' : 'none'
            }
        }else{
            return {
                width: '475px',
                background: '#C8B4B0',
                padding: '10px',
                borderBottom: '1px #E7B5AA dotted',
                textDecoration: 'none'
            }
        }
    }
   // checkstatus = this.props.todo.completed === true ? 'CHECKED' : '';
    render() {
        const {id, title, due} = this.props.todo;
        return (
            <div style={this.getStyle()}>'
                <input type="checkbox"                 
                onChange={this.props.markComplete.bind(this, id)}
                />{' '}
                {due} {title}{' '}
                <button onClick={this.props.delTodo.bind(this,id)}
                style={btnStyle}>X</button>
                <i ></i>
            </div>
        )
    }
}
TodoItem.PropType = {
    todo: PropTypes.object.isRequired,
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
