import React, { useReducer, useState } from "react";


interface Score {
    id : number,
    score : number,
    name : string
}



interface State {
    type : string,
    id : number
}



const initScore = [
  {
    id: 1,
    score: 0,
    name: "John",
  },
  {
    id: 2,
    score: 0,
    name: "Sally",
  },
];




const reducer = (state : Score[] , action : State) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player : Score) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    default:
      return state;
  }
}

export function Counter() {
  const [score, dispatch] = useReducer(reducer, initScore);

  const handleIncrease = (player : Score) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  return (
    <>
      {score.map((player : Score) => (
        <div key={player.id}>
          <label>
            <input
              type="button"
              onClick={() => handleIncrease(player)}
              value={player.name}
            />
            {player.score}
          </label>
        </div>
      ))}
    </>
  );
}
