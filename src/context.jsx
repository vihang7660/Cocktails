import React from "react";

const StateContext = React.createContext(null);

export function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export function useContextState() {
  return React.useContext(StateContext);
}

function reducer(state, action) {
  if (action.type === "fetching") {
    return { ...state, cocktail: action.data };
  } else if (action.type === "modifying_input_text") {
    return { ...state, searchText: action.text };
  } else if (action.type === "emptying") {
    return { ...state, cocktail: [] };
  } else if (action.type === "turning_off_loading") {
    return { ...state, isLoading: false };
  } else if (action.type === "turning_on_loading") {
    return { ...state, isLoading: true };
  }
}

const initialState = {
  cocktail: [],
  searchText: "",
  isLoading: true,
};
