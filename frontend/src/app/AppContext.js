// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cId, setCId] = useState(-1);

  return (
    <AppContext.Provider value={{ cId, setCId }}>
      {children}
    </AppContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(AppContext);
};
