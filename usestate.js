

useState is a React Hook that allows you to add state to functional components.
 It is an alternative to class-based components and provides a way to manage
  state in your application.

Example: 

import React, { useState } from 'react';

function Example() {

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}