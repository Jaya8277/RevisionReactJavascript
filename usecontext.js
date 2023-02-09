

useContext is a React hook that allows you to access data from a context object within a function component.
 Context provides a way to pass data through the component tree without having to pass props down manually
  at every level.

Example: 

// Create a context object 
const MyContext = React.createContext(); 

// Create a component that provides the context 
function MyProvider(props) { 
  return ( 
    <MyContext.Provider value={props.value}> 
      {props.children} 
    </MyContext.Provider> 
   ); 
} 

 // Use the useContext hook within a component to access the context value  

 function MyComponent() {  

   const value = React.useContext(MyContext);  

   return <div>{value}</div>;  

 }