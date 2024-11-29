import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Routes from "./Routes";
import AppContext from "./context/AppContext";

import GlobalStyle from "./styles/global";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

function App() {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={ theme }>
      <AlertProvider template={AlertTemplate} {...options}>
        <GlobalStyle />
        <Routes />
      </AlertProvider>
    </ThemeProvider>
  );
};

export default App;
