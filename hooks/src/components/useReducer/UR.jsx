import React, { useReducer } from 'react';

const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
};

function reducer(count, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return count + 1;
        case ACTIONS.DECREMENT:
            return count - 1;
        case ACTIONS.RESET:
            return 0;
        default:
            return count;
    }
}

function UR() {

    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <span>{count}</span>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
            <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
        </div>
    );
}

export default UR;
