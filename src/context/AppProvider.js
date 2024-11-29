import React, { useState } from "react";
import AppContext from "./AppContext";
import { lightTheme } from "../styles/themes";

const AppProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const contextValue = {
    theme: currentTheme,
    setCurrentTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;