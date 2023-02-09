

const myRef = React.useRef(initialValue);

// The useRef() hook is used to store a mutable value in a component. It's similar to creating a instance property on a class component, but it's not reset with each render. 

// Example: 
function MyComponent() {
  const myRef = React.useRef();

  return (
    <div>
      <input type="text" ref={myRef} />
    </div>
  );
}