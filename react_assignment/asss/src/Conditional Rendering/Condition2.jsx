import React, { useState } from 'react';

function Condition2() {
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  // Calculate ageNum here so it's available for conditional rendering
  const ageNum = parseInt(age, 10);

  return (
    <div>
      <label>
        Enter your age:{' '}
        <input
          type="number"
          value={age}
          onChange={handleChange}
          placeholder="Age"
          min="0"
        />
      </label>

      {age === '' ? (
        <p>Please enter your age.</p>
      ) : isNaN(ageNum) ? (
        <p>Invalid input. Please enter a number.</p>
      ) : ageNum >= 18 ? (
        <p>You are eligible to vote.</p>
      ) : (
        <p>You are not eligible to vote.</p>
      )}
    </div>
  );
}

export default Condition2;
