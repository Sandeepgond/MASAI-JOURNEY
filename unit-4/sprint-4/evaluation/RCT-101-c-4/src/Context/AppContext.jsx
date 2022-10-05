import React, { createContext,useReducer, useState } from "react";


export const AppContext = createContext();


export const loginsuccess = { type: "LOGIN_SUCCESS" };
export const logoutsuccess = { type: "LOGOUT_SUCCESS" };
export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return { ...state, log: true, out: false };
    }
    case "LOGOUT_SUCCESS": {
      return { ...state, log: false, out: true };
    }
    default: {
      return state;
    }
  }
};

function AppContextProvider({ children }) {
  const auth = {
    log: false,
    out: true
  };
  const [token, setToken] = useState("");
  const [state, dispatch] = useReducer(appReducer, auth);

  return (
    <AppContext.Provider value={{ state, auth, dispatch, setToken, token }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;