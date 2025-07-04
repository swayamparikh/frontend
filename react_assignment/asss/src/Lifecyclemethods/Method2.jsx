import React, { useEffect, useState } from 'react'

function Method2() {
     const [count, setCount] = useState(0);

 
  useEffect(() => {
    if (count !== 0) {
      console.log('Component updated: count changed to', count);
    }


    return () => {
      console.log('Component is about to unmount');
    };
  }, [count]); 

  return (
    <div>
       <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  )
}

export default Method2
