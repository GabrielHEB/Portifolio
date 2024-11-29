import { useContext, useState, useEffect } from "react";
import $ from "jquery";

import AppContext from "../../context/AppContext";
import { lightTheme, darkTheme } from "../../styles/themes";

import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Menu from "@iconscout/react-unicons/icons/uil-apps";
import Home from "@iconscout/react-unicons/icons/uil-home";
import Sobre from "@iconscout/react-unicons/icons/uil-user";
import Habilidades from "@iconscout/react-unicons/icons/uil-file-alt";
import Experiências from "@iconscout/react-unicons/icons/uil-briefcase";
import Projetos from "@iconscout/react-unicons/icons/uil-scenery";
import Contato from "@iconscout/react-unicons/icons/uil-message";

import { 
  Container, 
  HeaderMobile, 
  HeaderMobileName, 
  HeaderMobileButtons, 
  IconContainer, 
  Button, 
  ButtonsContainer, 
  ButtonsItens, 
  ButtonsItem 
} from "./styles";

function MobileHeader() {
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

  useEffect(() => {
    $('.menuButton').click(function(){
      $('.menuButtons').slideToggle();
    });
  }, []);

  return (
    <Container>
      <ButtonsContainer className="menuButtons">
        <ButtonsItens>
          <ButtonsItem href="#">
            <Home size="20" />
            <span>Home</span>
          </ButtonsItem>
          <ButtonsItem href="#Sobre">
            <Sobre size="20" />
            <span>Sobre</span>
          </ButtonsItem>
          <ButtonsItem href="#Habilidades">
            <Habilidades size="20" />
            <span>Habilidades</span>
          </ButtonsItem>
          <ButtonsItem href="#Experiencias">
            <Experiências size="20" />
            <span>Experiências</span>
          </ButtonsItem>
          <ButtonsItem href="#Projetos">
            <Projetos size="20" />
            <span>Projetos</span>
          </ButtonsItem>
          <ButtonsItem href="#Contato">
            <Contato size="20" />
            <span>Contato</span>
          </ButtonsItem>
        </ButtonsItens>
      </ButtonsContainer>
      <HeaderMobile>
        <HeaderMobileName>
          Gabriel Henrique
        </HeaderMobileName>
        <HeaderMobileButtons>
          <div>
            <Button onClick={() => changeTheme()}>
              <IconContainer>
                {themeState === 'light' ? <Moon size="25" /> : <Sun size="25" /> }
              </IconContainer>
            </Button>
          </div>
          <div>
          <Button className="menuButton">
              <IconContainer>
                <Menu size="25" />
              </IconContainer>
            </Button>
          </div>
        </HeaderMobileButtons>
      </HeaderMobile>
    </Container>
  );
};
  
export default MobileHeader;
