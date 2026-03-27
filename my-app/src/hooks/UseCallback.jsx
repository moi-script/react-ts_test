import { Children, useCallback } from "react"; 



// useCallback = "Remember the FUNCTION"
const handleSave = useCallback(() => {
  console.log("Saving data...", expensiveValue);
}, [expensiveValue]); // Only changes if the calculated value changes


// useState / useReducer: React creates the state memory cells. If you provided an initial value (like 0), it stores that.

// useMemo: React immediately runs the function inside. It calculates the "expensive" value right then and there so it can be used in the return statement (the UI).

// useCallback: React looks at the function you wrote, saves a reference to it in memory, and returns that reference. It does not run the code inside the function yet.

// The Return (JSX): React generates the virtual DOM.

// useEffect: This is the outlier. React finishes painting the UI to the screen, and only then does it go back and run your useEffect blocks.



// Automatically runs on Mount:

// useMemo: Runs the calculation immediately to get the value.
// useEffect: Runs immediately after the first paint.
// useState (Lazy initializer): If you pass a function to useState(() => ... ), it runs once on mount.




// Requires User Action (or Manual Call):

// useCallback: The hook "runs" to define the function, but the logic inside the function only runs when you (the user) click a button or trigger an event that calls that function.
// useReducer (The Reducer Function): The reducer logic only runs when you call dispatch(). On the first mount, the reducer function is ignored; React only cares about the initialState.




// 3 hooks Logic

// useMemo -> calculate a certain function, it does not recalculate in the next render
// useCallback -> it saves a memory and return it to be use, will be executed when call for action
// useReducer ->  will only be trigger when dispatch is called, nothing else





