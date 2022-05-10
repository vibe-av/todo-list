import React from 'react'

export default function TodoItem({todo, onDelete}) {
  return (
    <>
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn-sm btn-dark align-self-center mb-2" onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
    <hr />
    </>
  )
}
