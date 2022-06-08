import React from 'react'

export default class Todo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log('todo component')
    return (<li key={this.props.todo.id}>{this.props.todo.task} {this.props.todo.completed ? '✔️' : ''}</li>)
  }
}
