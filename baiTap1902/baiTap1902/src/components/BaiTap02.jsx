import { useState } from "react";

export default function BaiTap02() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const handleSummarize = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        setResult(isNaN(sum) ? "Invalid input" : sum);
    };

    return (
        <div className="container">
            <h1>Sum application</h1>
            <input
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleSummarize}>Summarize</button>
            {result !== null && <div className="result">Result: {result}</div>}
        </div>
    );
}
