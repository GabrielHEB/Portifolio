import { useContext, useState } from "react";

import AppContext from "../../context/AppContext";
import { lightTheme, darkTheme } from "../../styles/themes";

import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

import { 
  Container, 
  HeaderComponent, 
  NameContainer, 
  NavContainer, 
  IconContainer, 
  Button
} from "./styles";

function Header() {
  const { setCurrentTheme } = useContext(AppContext);
  const [themeState, setThemeState] = useState('light');

  const changeTheme = () => {
    if (themeState === 'light') {
      setCurrentTheme(darkTheme);
      setThemeState('dark');
    } else {
      setCurrentTheme(lightTheme);
      setThemeState('light');
    };
  };

  return (
    <Container>
      <HeaderComponent>
        <NameContainer>
          Gabriel Henrique
        </NameContainer>
        <NavContainer>
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Principal</a>
            <a href="#Sobre">Sobre</a>
            <a href="#Habilidades">Habilidades</a>
            <a href="#Experiencias">Experiências</a>
            <a href="#Projetos">Projetos</a>
            <a href="#Contato">Contato</a>
          </div>
          <Button onClick={() => changeTheme()}>
            <IconContainer>
              {themeState === 'light' ? <Moon size="25" /> : <Sun size="25" /> }
              
            </IconContainer>
          </Button>
        </NavContainer>
      </HeaderComponent>
    </Container>
  );
}
  
export default Header;
  