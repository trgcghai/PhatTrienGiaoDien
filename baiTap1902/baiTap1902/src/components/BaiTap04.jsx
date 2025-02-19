import { useState } from 'react'

const BaiTap04 = () => {
    const data = [
        {
            id: 'java',
            content: 'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'
        },
        {
            id: 'python',
            content: 'Python is an interpreted, high-level and general-purpose programming language.'
        },
        {
            id: 'js',
            content: 'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.'
        },
        {
            id: 'golang',
            content: 'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.'
        }
    ]
    const [result, setResult] = useState('This will show content')

    const handleClick = (e) => {
        const id = e.target.value
        const item = data.find(item => item.id === id)
        setResult(item.content)
    }

    return (
        <div className="container">
            <h1>Render application</h1>
            <div className='radio-group'>
                {data.map(item => {
                    return <button key={item.id} onClick={handleClick} value={item.id}>{item.id.charAt(0).toUpperCase() + item.id.slice(1, item.id.length)}</button>
                })}
            </div>
            <div className="result">{result}</div>
        </div>
    )
}

export default BaiTap04