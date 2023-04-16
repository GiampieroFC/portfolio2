import { Dispatch, Reducer, ReducerAction, createContext, useContext, useReducer } from "react"

interface State {
    dark: boolean,
    swi: 'Portfolio' | 'Stack'
    message: string
}
interface Action {
    type: string,
    payload?: any
}

const initialState: State = {
    dark: false,
    swi: 'Portfolio',
    message: 'nada ha cambiado'
}


const reducer = (state: State, action: Action) => {

    switch (action.type) {
        case 'swi':
            return {
                ...state,
                swi: action.payload
            }
        case 'dark':
            return {
                ...state,
                dark: action.payload
            }

        default:
            return {
                ...state,
                message: 'Recibí tu petición, pero algo salió mal'
            };
    }

}


const MyContext = createContext<[State, ReducerAction<Reducer<State, Dispatch<Action>>>]>([] as unknown as [State, Dispatch<Action>])

const useMyContext = () => {
    return useContext<[State, ReducerAction<Reducer<State, Dispatch<Action>>>]>(MyContext)
}

interface ContextProps {
    children: JSX.Element | JSX.Element[]
}

function MyProvider({ children }: ContextProps) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <MyContext.Provider value={[state, dispatch]}>
            {children}
        </MyContext.Provider>
    )
}

export {
    MyProvider,
    MyContext,
    useMyContext
}
export type {
    State,
    Action
}
