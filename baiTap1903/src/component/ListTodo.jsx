import React from 'react'
import Todo from './Todo'

const ListTodo = ({ listTodo, dispatch }) => {
    return (
        <div className='flex flex-col gap-3 mt-6 items-center'>
            {listTodo && listTodo.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                )
            })}
        </div>
    )
}

export default ListTodo