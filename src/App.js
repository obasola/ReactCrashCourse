
import './App.css';
import { Component } from "react";
import {Header} from './components/layout/Header';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        title: 'Complete Jira ticket FRD-6522',
        due: '04-09-2021',
        completed: true
      },
      {
        id: 2,
        title: 'Complete Jira ticket FRD-5299',
        due: '04-15-2021',
        completed: false
      },
      {
        id: 3,
        title: 'Complete Jira ticket FRD-6574',
        due: '04-15-2021',
        completed: true
      },
      {
        id: 4,
        title: 'Complete Jira ticket FRD-6228',
        due: '03-31-2021',
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    console.log("Todo Nbr: "+id);
    this.setState( { todos: this.state.todoList.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }
  delTodo = (id) => {
    this.setState( { todoList: 
      [...this.state.todoList
        .filter(todo => todo.id !== id)
      ]
    });    
  }
  saveTodo = (item) => {
    const tempMap  = this.state.todoList.map;
    const nextId = this.state.todoList.length + 1
    item.id = nextId;
   // this.setState({todoList: item});
    console.log("map = "+tempMap);
    //tempMap.set(item);
    //this.setState({ todoList : item});
    
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <br/>
          <AddTodo saveTodo={this.saveTodo}/>
          <Todos todos={this.state.todoList} 
              markComplete={this.markComplete}
              delTodo={this.delTodo}  
          />
        </div>
      </div>
    );
  }
}

export default App;
