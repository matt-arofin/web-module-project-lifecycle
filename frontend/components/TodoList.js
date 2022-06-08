import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    console.log("todolist component")
    return (
      <ul>
        {
          this.props.list.map(todo => {
            return (<Todo todo={todo} key={todo.id}/>)
          })
        }
      </ul>
    )
  }
}
