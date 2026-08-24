import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  // switch
};

export const TitleColorContextProvider = ({ children }) => {
  // state (estado) e dispatch (função para alterar o contexto, é com se fosse o setState)
  // titleColorReducer é o responsável por alterar o estado e o color é quem é o estado atual

  const [state, displatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log("Title color context: ", state);

  return (
    <TitleColorContext.Provider value={{ ...state }}>
      {children}
    </TitleColorContext.Provider>
  );
};
