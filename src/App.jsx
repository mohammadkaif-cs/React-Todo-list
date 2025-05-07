import { useState } from "react"

function App(){

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])




  function handleSubmit(e){
     e.preventDefault()

     setTodos(currentTodos =>{
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed:false }
      ]
     })
     setNewItem("")
  }


  function toggleTodo(id, completed){
 
   
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }


  function handleDelete(id){
    setTodos(t => {
      return t.filter(todo => todo.id !== id)
    })
  }
 
return(
  <>
  <form action="" onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <button className="btn" >Add</button>


  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.map((todo, _) => 
    <li key={todo.id}>
    <label htmlFor="">
      <input type="checkbox" onChange={e => toggleTodo(id, e.target.checked)} checked={todo.completed}/>
      {todo.title}
    </label>
    <button onClick={()=> handleDelete(todo.id)} className="btn btn-danger">Delete</button>
  </li>
    )}
    
   
  </ul>
  </>
)
}

export default App