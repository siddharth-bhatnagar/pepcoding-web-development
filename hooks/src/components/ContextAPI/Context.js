import React from 'react';

const MyContext = React.createContext('Hello');

export default MyContext;


// Inside the React component Tree all the way down from App.jsx to all the leaf nodes, 
// if we had to pass some prop from App to any of the leaf nodes, we had to manually pass it down through all the components along the path 
// to that leaf node. This is known as props drilling. 
// The problem with this idea is that those components which didnt require that prop would also recieve it simply because they lie in the path
// To solve this, Context API was introduced. A context is a value/prop which we intend to drill. Now, using the useContext Hook, we can
// receive this components in the tree which needs them, no need to drill it down manually.

// Syntax: 
/*

const MyContext = React.createContext(default value);

to consume this context:

const context = useContext(MyContext);

We might wanna change the value of the context down the component tree at some point, to do that, 
we simply use context provider which recieves a value prop, usually we pass a state variable in the value prop

Whenever there is a change in state , that whole component is re-rendered along with its whole component subtree
We can avoid sub-component re-renders by using React.memo() which is like DP on trees (memoization)

If that component uses the useContext hook with a context equal to state, then it will re-render no matter what

Example: we have state for theme in App js and there are some leaf nodes down the line whose themes we want to 
change upon change in theme in App but not the intermediate nodes, so we pass the theme state as context and use that context in those sub-components needing them

Re-render only happens with react.memo only if the context in it uses state which is being changed


*/