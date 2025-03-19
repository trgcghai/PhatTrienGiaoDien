import { useEffect, useState } from 'react'
import ListTodo from './ListTodo'

const TodoAppApi = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    return (
        <div>
            <p className='font-bold text-xl'>Todolist fetch from Api</p>
            <ListTodo listTodo={todos} />
        </div>
    )
}

export default TodoAppApi