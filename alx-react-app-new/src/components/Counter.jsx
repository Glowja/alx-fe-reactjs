import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize state with a count of 0

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div>
        <button 
          style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }} 
          onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button 
          style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }} 
          onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button 
          style={{ padding: '10px 20px', fontSize: '16px' }} 
          onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
