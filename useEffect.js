
useEffect is a React hook that allows you to perform side effects in function components. It is a combination of componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods. It can be used for data fetching, setting up subscriptions, or manually changing the DOM in React components.
const [state, setState] = useState(initialState);

useEffect(() => {
  // Do something with state
  // Update state if needed
  setState(updatedState);
}, [state]);