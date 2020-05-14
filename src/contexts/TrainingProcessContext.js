import React, {Reducer, ReducerState, useEffect, useReducer} from "react";


const Context = React.createContext({});

const Provider = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'set_timer':
                return{ ...state, timer: action.payload };
            case 'set_left_actions':
                return { ...state, leftActions: action.payload };
            case 'set_done_actions':
                return { ...state, doneActions: action.payload };
            case 'set_training':
                return { ...state, training: action.payload };
            default:
                return state;
        }
    };

    const defaultValue = {
        timer: {
            seconds: 0,
            isActive: false
        },
        leftActions: [],
        doneActions: [],
        training: {}
    }


    const [state, dispatch] = useReducer(reducer, defaultValue);

    const value = {
        state,
        toggle: () =>
            dispatch({type: 'set_timer', payload: {...state.timer, isActive: !state.timer.isActive}}),
        reset: () =>
            dispatch({type: 'set_timer', payload: {...state.timer, seconds: 0, isActive: false}}),
        setSeconds: (sec) =>
            dispatch({type: 'set_timer', payload: {...state.timer, seconds: sec}}),
        setLeftActions: (actions) =>
            dispatch({ type: 'set_left_actions', payload: actions }),
        setDoneActions: (exercise) =>
            dispatch({type: 'set_done_actions', payload: {...state, doneActions: exercise}}),
        getCurrentActionName: () => {
            if(state.leftActions.length > 0) {
                return state.leftActions[0].name;
            } else {
                return "";
            }
        },
        nextAction: () => {
            if (state.leftActions.length ) {
                const doneAction = { ...state.leftActions[0], time: state.timer.seconds }
                dispatch({ type: 'set_done_actions', payload: [...state.doneActions, doneAction] });
                dispatch({ type: 'set_left_actions', payload: state.leftActions.slice(1) });
                dispatch({type: 'set_timer', payload: {...state.timer, seconds: 0}});
            }
        },
        previousAction: () => {
            if (state.doneActions.length ) {
                const leftAction = { ...state.doneActions[state.doneActions.length - 1]}
                dispatch({ type: 'set_left_actions', payload: [leftAction, ...state.leftActions] });
                dispatch({ type: 'set_done_actions', payload: state.doneActions.slice(0, -1) });
                dispatch({type: 'set_timer', payload: {...state.timer, seconds: 0}});
            }
        },
        setTraining: (training) => dispatch({ type: 'set_training', payload: training})
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
