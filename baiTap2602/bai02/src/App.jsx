import { useState } from 'react'
import './App.css'

function App() {

  const [initialAmount, setInitialAmount] = useState()
  const [interestRate, setInterestRate] = useState()
  const [targetAmount, setTargetAmount] = useState()
  const [result, setResult] = useState([])

  const calculateTarget = () => {
    console.log('check value', { initialAmount, interestRate, targetAmount });

    if (!initialAmount || !interestRate || !targetAmount) {
      return
    }

    let years = 0
    let amount = parseFloat(initialAmount)
    let res = []
    while (amount < parseFloat(targetAmount)) {
      amount += amount * (parseFloat(interestRate) / 100)
      years++
      res.push({ years, amount: Math.round(amount * 100) / 100 })
    }
    setResult(res)
  }

  return (
    <div className='flex items-center justify-center mt-20'>
      <div className='p-2 border border-gray-300 rounded-lg shadow-lg w-[400px]'>
        <h1 className='text-3xl font-bold text-center text-gray-800'>
          Máy tính đầu tư
        </h1>

        <div>
          <div className='flex gap-2 justify-start items-center my-2'>
            <p className='text-md flex-[2]'>Số tiền ban đầu</p>
            <input
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
              className='border-1 rounded-lg border-gray-400 p-2 flex-[3]'
            />
          </div>
          <div className='flex gap-2 justify-start items-center my-2'>
            <p className='text-md flex-[2]'>Tỉ lệ lãi</p>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className='border-1 rounded-lg border-gray-400 p-2 flex-[3]'
            />
          </div>
          <div className='flex gap-2 justify-start items-center my-2'>
            <p className='text-md flex-[2]'>Số tiền mục tiêu</p>
            <input
              type="number"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              className='border-1 rounded-lg border-gray-400 p-2 flex-[3]'
            />
          </div>
        </div>

        <div className='flex justify-center my-4'>
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer' onClick={calculateTarget}>
            Tính
          </button>
        </div>
        {result && (
          <div className='my-4'>
            <h2 className='text-xl font-bold text-center text-gray-800'>
              Kết quả
            </h2>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='border border-gray-300 p-2'>Năm</th>
                  <th className='border border-gray-300 p-2'>Số tiền</th>
                </tr>
              </thead>
              <tbody>
                {result.map((item, index) => (
                  <tr key={index}>
                    <td className='border border-gray-300 p-2'>{item.years}</td>
                    <td className='border border-gray-300 p-2'>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
