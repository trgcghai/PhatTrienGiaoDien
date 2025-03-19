import React from 'react'
import { useReducer, useRef } from 'react'
import { todos } from '../data'
import ListTodo from './ListTodo'

const TodoApp = () => {
    const todoReducer = (state, action) => {
        switch (action.type) {
            case "CHECK_TODO":
                return state.map(todo => {
                    if (todo.id === action.todo.id) {
                        return { ...todo, completed: true }
                    } else {
                        return todo
                    }
                })
            case "UNCHECK_TODO":
                return state.map(todo => {
                    if (todo.id === action.todo.id) {
                        return { ...todo, completed: false }
                    } else {
                        return todo
                    }
                })
            case "ADD_TODO":
                return [...state, action.todo]
            case "EDIT_TODO":
                console.log(action.newTodo)
                return state.map(todo => {
                    if (todo.id === action.todo.id) {
                        return { ...action.newTodo }
                    } else {
                        return todo
                    }
                })
            case "REMOVE_TODO":
                return state.filter(todo => todo.id != action.todo.id)
            default:
                return state
        }
    }

    const [listTodo, dispatch] = useReducer(todoReducer, todos)
    const inputRef = useRef()
    const buttonRef = useRef()

    const handleAddTodo = () => {
        const title = inputRef.current.value
        if (!title) return

        const todo = {
            id: listTodo.length + 1,
            title,
            completed: false
        }

        dispatch({ type: "ADD_TODO", todo })

        inputRef.current.value = ''
    }

    return (
        <>
            <div>
                <label htmlFor="" className='block text-lg'>Add new todo</label>
                <input ref={inputRef} type="text" placeholder='Your todo' className='w-full p-3 border border-gray-300 rounded-lg' />
            </div>
            <div>
                <button ref={buttonRef} className='bg-blue-400 px-3 py-2 cursor-pointer rounded-lg border-0 w-full text-white font-bold mt-3' onClick={handleAddTodo}>
                    Add new todo
                </button>
            </div>
            <ListTodo listTodo={listTodo} dispatch={dispatch} />
        </>
    )
}

export default TodoApp