import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos';


// Hold all todo items in state here

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Go Shopping',
          id: 32490,
          completed: false
        },
        {
          task: 'Do Laundry',
          id: 29457,
          completed: false
        },
        {
          task: 'Walk The Dog',
          id: 73947,
          completed: false
        }
      ]
    }
  }

  componentDidMount(){
    console.log("Component Mounted")
  }

  render() {
    const { todos } = this.state;
    console.log(todos)
    return (
      <div>
        <TodoList list={this.state.todoList}/>
        <ul>
        {
          todos.map(todo => {
            return (<li key={todo.id}>{todo.task} {todo.completed ? '✔️' : ''}</li>)
          })
        }
        </ul>
        <Form />
      </div>
    )
  }
}
