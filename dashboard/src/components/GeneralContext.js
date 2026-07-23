import React, { createContext } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  return (
    <GeneralContext.Provider value={{}}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
