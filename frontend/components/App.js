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
          completed: true
        },
        {
          task: 'Walk The Dog',
          id: 73947,
          completed: false
        }
      ]
    }
  }

  // Event handlers (Click & Submit)
  handleHide = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    })
    console.log('Clear clicked')
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log('Submit clicked')
  }

  // Lifecycle methods
  componentDidMount(){
    console.log("Component Mounted")
  }

  componentDidUpdate(){
    console.log('Component Updated')
  }

  render() {
    const { todos } = this.state;
    console.log(todos)
    return (
      <div className='App'>
        <TodoList list={todos}/>

        <Form />
        <button onClick={this.handleHide}>Hide Completed</button>
      </div>
    )
  }
}
