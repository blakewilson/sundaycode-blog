import React, { createContext, FC, useContext, useReducer } from "react";
import { Post } from "./types";

type GlobalState = {
  recentPost: Post;
};

const initialState: GlobalState = {
  recentPost: null,
};

const StoreContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "SET_RECENT_POST":
      return { ...state, recentPost: action.payload as Post };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
