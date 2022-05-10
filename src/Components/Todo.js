import React from 'react'
import TodoItem from './TodoItem'

export default function Todo(props) {
  return (
    <div className='container'>
      <h3 className='text-center m-4'>Work todo Today!!</h3>
      {/* {props.todos} */}
      <div className="justify-content-evenly">
        { props.todos.length === 0? 
        <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4">Nothing to do!!</h1>
          <p className="lead">You've completed all your tasks for today! Enjoy your day!</p>
        </div>
      </div>
        :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key = {todo.sno} onDelete = {props.onDelete}/>
          })
        }

      </div>
    </div>
  )
}
