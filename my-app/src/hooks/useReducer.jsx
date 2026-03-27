import React, {useReducer, useState} from "react";

// Use Reducer is implemented of architectural and more readable way 
const initScore = [
    {
        id : 1,
        score : 0,
        name : "John"        
    },
    {
        id : 2,
        score : 0,
        name : "Sally"        
},
    
]


const reducer = (state, action) => {
    switch(action.type) {
        case "INCREASE": 
        return state.map((player) => {
            if(player.id === action.id) {
                return {...player, score : player.score + 1}
            } else {
                return player
            }
        })
        default : 
        return state 
    }
}


export function Counter() {
    const [score, dispatch] = useReducer(reducer, initScore);

    const handleIncrease = (player) => {
        dispatch({type : "INCREASE", id : player.id})
    }

    return (<>
    {
        score.map((player) => (
            <div key={player.id}>
                <label >
                    <input type="button" onClick={() => handleIncrease(player)}  value={player.name}/>
                    {player.score}
                </label>
            </div>
        ))
    }
    
    </>)

}




// (Insert the CounterState and CounterAction types from the previous step here)

const CounterComponent = () => {
  // state is inferred as CounterState
  // dispatch is inferred to only accept CounterAction
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Count: {state.count}</h1>
      
      {/* Correct usage: TypeScript is happy */}
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        Add 5
      </button>

      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        Subtract 1
      </button>

      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>

      {/* ERROR: This would fail type checking because 
        'payload' is missing for 'increment' 
      */}
      {/* <button onClick={() => dispatch({ type: 'increment' })}>Error</button> */}
    </div>
  );
};