import { useState } from "react";

export default function BaiTap03() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let res;
        switch (operation) {
            case "+":
                res = n1 + n2;
                break;
            case "-":
                res = n1 - n2;
                break;
            case "*":
                res = n1 * n2;
                break;
            case "/":
                res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
                break;
            default:
                res = "Invalid operation";
        }
        setResult(isNaN(res) ? "Invalid input" : res);
    };

    return (
        <div className="container">
            <h1>Calculator application</h1>
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
            <div className="radio-group">
                <div className="group-section">
                    <input type="radio" value="+" checked={operation === "+"} onChange={() => setOperation("+")} />
                    <label>+</label>
                </div>
                <div className="group-section">
                    <input type="radio" value="-" checked={operation === "-"} onChange={() => setOperation("-")} />
                    <label>-</label>
                </div>
                <div className="group-section">
                    <input type="radio" value="*" checked={operation === "*"} onChange={() => setOperation("*")} />
                    <label>*</label>
                </div>
                <div className="group-section">
                    <input type="radio" value="/" checked={operation === "/"} onChange={() => setOperation("/")} />
                    <label>/</label>
                </div>
            </div>
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && <div className="result">Result: {result}</div>}
        </div>
    );
}
