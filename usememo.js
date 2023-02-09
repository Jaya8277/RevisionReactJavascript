

// useMemo is a React hook that allows you to memoize values. It is useful when you have expensive
//  calculations that you don't want to run on every render. 

//Example: 
import React, { useMemo } from 'react';

function ExampleComponent() {
  const [count, setCount] = React.useState(0);

  // Calculate expensive result only when count changes
  const expensiveResult = useMemo(() => {
    let result = 0;

    for (let i = 0; i < count * 100; i++) {
      result += i;
    }

    return result;
  }, [count]);

  return (
    <div>
      <h1>{expensiveResult}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}