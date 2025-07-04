import React, { useState } from 'react'

function H1() {
     const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default H1
