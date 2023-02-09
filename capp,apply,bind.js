

Call, Apply and Bind are all methods used to invoke functions in JavaScript.

Call: 
The call() method calls a function with a given this value and arguments provided individually.
Example: 
const obj = {num: 2};
const addToThis = function(a, b, c) {
return this.num + a + b + c;
};
addToThis.call(obj, 1, 2, 3); // 8 


Apply: 
The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object). 
Example: 
const obj = {num: 2};
const addToThis = function(a, b, c) {
return this.num + a + b + c; 
}; 
addToThis.apply(obj, [1, 2, 3]); // 8

  												    or 

 const arr = [1, 2 ,3];   // Array-like object 
addToThis.apply(obj, arr); // 8

   Bind: 
The bind() method creates a new function that when called has its this keyword set to the provided value. The new function will also have the same arguments and body as the original one.   Example:  const obj = {num: 2}; const addToThis = function(a, b, c) { return this.num + a + b + c; }; const boundFunc = addToThis.bind(obj); boundFunc(1 ,2 ,3); // 8