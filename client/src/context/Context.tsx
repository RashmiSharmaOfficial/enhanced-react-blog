import { createContext, useReducer, useEffect, ReactNode } from "react";
import Reducer from "./Reducer";

// User interface for type safety
interface User {
    id: string;
    name: string;
    profilePic: string;
}

interface InitialState {
    user: User | null;
    isFetching: boolean;
    error: boolean;
}

// Initial state
const INITIAL_STATE: InitialState = {
    user: JSON.parse(localStorage.getItem("user") || "null"),
    isFetching: false,
    error: false,
};

// Context with type definition
export const Context = createContext<{
    user: User | null;
    isFetching: boolean;
    error: boolean;
    dispatch: React.Dispatch<any>;
} | undefined>(undefined); // Set the initial value to undefined

interface ContextProviderProps {
    children: ReactNode;
}

// Context Provider
export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch, // Expose dispatch
            }}
        >
            {children}
        </Context.Provider>
    );
};
