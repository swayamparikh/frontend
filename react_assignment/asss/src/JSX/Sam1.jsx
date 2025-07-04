import React from 'react'

function Sam1() {
     const jsxExplanation = "JSX allows you to write HTML-like code within JavaScript.";
  const dynamicData = "It's powerful because it makes your UI code more readable and expressive.";

  return (
    <div>
       <h1>Welcome to JSX</h1>
      <p>{jsxExplanation} {dynamicData}</p>
    </div>
  )
}

export default Sam1
