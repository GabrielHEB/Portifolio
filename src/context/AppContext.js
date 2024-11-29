import { createContext } from "react";
import { lightTheme } from "../styles/themes";

const initialTheme = {
  theme: lightTheme,
};

const AppContext = createContext(initialTheme);

export default AppContext;