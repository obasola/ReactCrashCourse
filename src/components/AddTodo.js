import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        todo : {
            id: 0,
            title: '',
            due: '',
            completed: false
        }        
    }
    onChange = (ev) => {
        var todoItem = this.state.todo;
        todoItem.title = ev.target.value;            
        todoItem.due = '04-22-2021'
        this.setState({todo: todoItem});
    }
    
    render() {
        return (
            <form style={{display: 'flex', backgroundColor: '#ccc'}}>
                <input
                    name="title" 
                    style={{flex: '10', padding: '5px', color: '#fff'}}
                    type="text" 
                    placeholder="Add a Todo..."
                    value={this.state.todo.title}
                    onChange={this.onChange}
                />
                <input 
                    className="btn"
                    style={{flex: '1'}}
                    type="submit"
                     value="Submit"
                     onSubmit={this.props.saveTodo(this.state.todo)}
                     
                />
            </form>
        )
    }
}

export default AddTodo
