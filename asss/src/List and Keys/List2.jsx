import React from 'react'

function List2() {
      const users = [
    { id: 101, name: 'Alice' },
    { id: 102, name: 'Bob' },
    { id: 103, name: 'Charlie' },
    { id: 104, name: 'Diana' },
  ];
  return (
    <div>
       <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default List2
