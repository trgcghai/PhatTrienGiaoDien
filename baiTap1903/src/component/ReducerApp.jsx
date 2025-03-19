import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react'

const ChildComponent = React.memo(({ value, data, handleClick }) => {
    return (
        <div>
            <p className='text-xl font-bold'>Child Component</p>
            <p className='text-lg'>Value: {value}</p>
            <button onClick={() => handleClick({ type: "INCREASE" })} className='bg-blue-400 text-white px-4 py-2 rounded-lg mr-4'>Increase</button>
            <button onClick={() => handleClick({ type: "DECREASE" })} className='bg-red-400 text-white px-4 py-2 rounded-lg'>Descrease</button>
            <div className='mt-4'>
                <p className='text-lg font-bold'>Data from API</p>
                <ul>
                    {data && data.map(user => (
                        <li key={user.id} className='text-lg'>{user.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
})

const ReducerApp = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREASE":
                return { count: state.count + 1 }
            case "DECREASE":
                return { count: state.count - 1 }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    const handleClick = useCallback(({type}) => {
        dispatch({ type })
    }, [])

    const memoData = useMemo(() => data, [data])

    return (
        <div>
            <div className='mt-4'>
                <p className='text-xl font-bold'>Parent Component</p>
                <p className='text-xl'>Count: {state.count}</p>
            </div>
            <div className='mt-4'>
                <button onClick={() => dispatch({ type: "INCREASE" })} className='bg-blue-400 text-white px-4 py-2 rounded-lg mr-4'>Increase</button>
                <button onClick={() => dispatch({ type: "DECREASE" })} className='bg-red-400 text-white px-4 py-2 rounded-lg'>Descrease</button>
            </div>
            <div className='mt-4'>
                <ChildComponent value={state.count} data={memoData} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default ReducerApp