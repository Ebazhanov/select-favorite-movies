import React from 'react'
import {IAction, IState} from "./interfaces";

const initialState: IState = {
    episodes: [],
    favorites: []
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, episodes: action.payload};
        case 'ADD_FAV':
            return {...state, favorites: [...state.favorites, action.payload]};
        default:
            return state;
    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}> {props.children}</Store.Provider>
}
