import React, { createContext, useReducer, Dispatch } from 'react'
import { StateContextType, ActionContextType, ISeriesData, ISeries } from '../types/series.type';

const initialState: StateContextType = { status: 'empty' }

// const defaultDispatch: React.Dispatch<ActionContextType> = () => initialState
// const store = createContext({
//     state: initialState,
//     dispatch: defaultDispatch,
// })

const store = createContext<{
    state: StateContextType;
    dispatch: Dispatch<ActionContextType>;
  }>({
    state: initialState,
    dispatch: () => null
  });
const { Provider } = store

const reducer = (state: StateContextType, action: ActionContextType): StateContextType => {
    switch (action.type) {
        case 'request':
            return { status: 'loading' }
        case 'set_param':
            return { status: 'query', term: action.payload }
        case 'set_details':
            return { status: 'success', details: action.resultDetails }
        case 'set_default':
            return { status: 'success', defaultData: action.resultsDefault }
        case 'success':
            return { status: 'success', data: action.results}
        case 'failure':
            return { status: 'error', error: action.error }
        default:
            throw new Error()
    }
}

const SeriesProvider = ({ children }: any ) => {
    const [
        state
    , dispatch] = useReducer<React.Reducer<StateContextType, ActionContextType>>(reducer, initialState)
    return <Provider value={{
        state
        , dispatch
    }}>{ children } </Provider>
};

export { store, SeriesProvider }