import React, {useReducer, useState} from "react";



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


export function Counter () {
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