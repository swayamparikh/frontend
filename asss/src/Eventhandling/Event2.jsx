import React, { useState } from 'react';

function Event2() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <p>{clicked ? "Clicked!" : "Not Clicked"}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Event2;
