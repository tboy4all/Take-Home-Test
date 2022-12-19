import React, { useState } from 'react'

const Counter = () => {
  // Declare a state variable called "count" with an initial value of 0
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(1)

  // This function is called when the "Increment" button is clicked
  const handleIncrement = () => {
    setCount(count + amount)
  }

  // This function is called when the "Decrement" button is clicked
  const handleDecrement = () => {
    setCount(count - amount)
  }

  function handleAmountChange(event) {
    setAmount(Number(event.target.value))
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <br />
      <input
        type='number'
        value={amount}
        onChange={handleAmountChange}
        className='amount'
      />
    </div>
  )
}

export default Counter
