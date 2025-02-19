import { useState } from "react"

const BaiTap05 = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Todo 1' },
        { id: 2, title: 'Todo 2' },
        { id: 3, title: 'Todo 3' },
    ])
    const [input, setInput] = useState('')

    const handleAdd = () => {
        if (input.trim() === '') return
        const newTodo = {
            id: todos.length + 1,
            title: input,
        }
        setTodos([...todos, newTodo])
        setInput('')
    }

    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    return (
        <div className="container">
            <h1>Todo application</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <div className="todo-list">
                {todos.map(todo => {
                    return (
                        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            <div >{todo.title}</div>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BaiTap05