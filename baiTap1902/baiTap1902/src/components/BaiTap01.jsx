import { useState } from "react"

const BaiTap01 = () => {
    const [input, setInput] = useState('')
    const [displayed, setDisplayed] = useState('')
    return (
        <div className="container">
            <h1>Hello application</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => { setDisplayed(input) }}>Click</button>
            <p className="result">Hello: {displayed}</p>
        </div>
    )
}

export default BaiTap01