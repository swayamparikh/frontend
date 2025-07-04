import React from 'react'

function List1() {
     const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
  return (
    <div>
       <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
    </div>
  )
}

export default List1
