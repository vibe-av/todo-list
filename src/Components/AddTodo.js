import React, { useState } from 'react';

export default function AddTodo({ addTodo }) {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description can not be empty!!");
    }

    else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }

  return (
    <div className="container">
      <h3 className="text-center my-4">Add Tasks</h3>

      <form className='my-4' onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>

    // let styleComp = {
    //   marginLeft: '14px'
    // }
    // let styleLabel = {
    //   padding: '5px',
    //   fontFamily: 'Helvetica Neue Arial',
    //   fontSize: '.95em'
    // }
    // <div className="col-lg-6 offset-3 addTask p-3 bg-dark text-light rounded d-none" id="addForm">
    //         <div className="form-group d-flex justify-content-evenly" id="addTaskForm">
    //             <label htmlFor="title">
    //                 <pre style={styleLabel}>Title       </pre>
    //             </label>
    //             <input type="text" className="form-control w-75" id="title" aria-describedby="titleHelp" style={styleComp}/>
    //         </div>
    //         <hr/>
    //         <div className="form-group d-flex justify-content-evenly mb-3" id="addTaskForm">
    //             <label htmlFor="description">Description</label>
    //             <textarea className="form-control w-75" rows="3" id="description"></textarea>
    //         </div>
    //         <div className="d-flex justify-content-between">
    //             <button id="add" className="btn btn-secondary px-2">Add to List!</button>
    //             <button id="clear" className="btn btn-secondary">Clear list</button>
    //         </div>
    //     </div>
  )
}
