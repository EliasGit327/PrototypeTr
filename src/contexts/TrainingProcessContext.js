import React, { Reducer, ReducerState, useReducer } from "react";


const Context = React.createContext({});

const Provider = ({ children }) => {

    const locationReducer = (state, action) => {
        switch (action.type) {
            case 'set_timer':
                return{ ...state, timer: action.payload }
            case 'set_id':
                return { ...state, id: action.payload };
            case 'set_name':
                return { ...state, name: action.payload };
            case 'set_exercises':
                return { ...state, exercises: action.payload };
            default:
                return state;
        }
    };

    const defaultValue = { timer: 0, id: "none", name: "none", lvl: 0, exercises: [] }


    const [state, dispatch] = useReducer(locationReducer, defaultValue);

    const value = {
        state,
        setId: (id) => dispatch({ type: 'set_id', payload: id }),
        setName: (name) => dispatch({ type: 'set_name', payload: name }),
        setExercises: (exercises) => dispatch({ type: 'set_exercises', payload: exercises })
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
