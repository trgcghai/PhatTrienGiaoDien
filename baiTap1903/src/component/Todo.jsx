import React from 'react'

const Todo = ({ todo, dispatch }) => {
    return (
        <div key={todo.id} className={`w-[1200px] hover:bg-gray-200/50 p-3 border border-gray-300 rounded-lg flex items-center justify-between ${todo.completed ? 'bg-green-100' : ''}`}>
            <p className='text-lg'>{todo.title}</p>
            <div className='flex items-center gap-6'>
                {!todo.completed ?
                    <button className='bg-green-400 px-3 py-2 cursor-pointer rounded-lg border-0 w-40 text-white font-bold' onClick={() => dispatch({ type: "CHECK_TODO", todo })}>
                        Mark as done
                    </button>
                    : <button className='bg-green-400 px-3 py-2 cursor-pointer rounded-lg border-0 w-40 text-white font-bold' onClick={() => dispatch({ type: "UNCHECK_TODO", todo })}>
                        Unmark
                    </button>
                }
                <button className='bg-red-400 px-3 py-2 cursor-pointer rounded-lg border-0 w-40 text-white font-bold' onClick={() => { dispatch({ type: "REMOVE_TODO", todo }) }}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default Todo