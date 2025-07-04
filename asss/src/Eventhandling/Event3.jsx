import React, { useState } from 'react'


function Event3() {
     const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
       <form>
        <label>
          Enter Text: 
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleChange} 
            placeholder="Type here..."
          />
        </label>
      </form>
    </div>
  )
}

export default Event3
