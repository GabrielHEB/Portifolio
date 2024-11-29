import { useEffect } from "react";
import $ from "jquery";

import BackendIcon from "@iconscout/react-unicons/icons/uil-server-network";
import FrontendIcon from "@iconscout/react-unicons/icons/uil-brackets-curly";
import ToolsIcon from "@iconscout/react-unicons/icons/uil-swatchbook";
import ArrowDown from "@iconscout/react-unicons/icons/uil-angle-down";
import ArrowUp from "@iconscout/react-unicons/icons/uil-angle-up";

import {
  Container,
  TitleContainer,
  SkillsSection,
  SkillSection,
  SkillTitle,
  SkillsContainer,
  SkillContainer
} from "./styles";

function Skills() {
  useEffect(() => {
    $('.skillButton').click(function(){
      $(this).siblings('.skillContent').slideToggle();
      if ($(this).attr('class').includes('active')) {
        $(this).removeClass('active');
        $(this).children('.up').hide();
        $(this).children('.down').show();
      } else {
        $(this).addClass('active');
        $(this).children('.up').show();
        $(this).children('.down').hide();
      };
    });
  }, []);

  return (
    <Container id="Habilidades">
      <TitleContainer>
        <h1>Habilidades</h1>
        <h2>Minhas Habilidades Técnicas</h2>
      </TitleContainer>
      <SkillsSection>
        <SkillSection>
          <SkillTitle className="skillButton">
            <div>
              <FrontendIcon size="25" />
              <h3>Desenvolvimento Frontend</h3>
            </div>
            <ArrowUp className="up" style={{display: 'none'}}/>
            <ArrowDown className="down"/>
          </SkillTitle>
          <SkillsContainer className="skillContent" style={{display: 'none'}}>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML" />
              <h3>HTML</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS" />
              <h3>CSS</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <h3>JavaScript</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" />
              <h3>TypeScript</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="ReactJS" />
              <h3>ReactJS</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://camo.githubusercontent.com/5c92eeb467fd5d2b1ef1c560e3c3c2f758a8d4e03a8136bda7b41a2d3d4a1b59/68747470733a2f2f72656163746e61746976652e6465762f696d672f6865616465725f6c6f676f2e737667" alt="React Native" />
              <h3>React Native</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" />
              <h3>Redux</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="Jest" />
              <h3>Jest</h3>
            </SkillContainer>
          </SkillsContainer>
        </SkillSection>
        <SkillSection>
          <SkillTitle className="skillButton">
            <div>
              <BackendIcon size="25" />
              <h3>Desenvolvimento Backend</h3>
            </div>
            <ArrowUp className="up" style={{display: 'none'}}/>
            <ArrowDown className="down"/>
          </SkillTitle>
          <SkillsContainer className="skillContent" style={{display: 'none'}}>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node"/>
              <h3>Node</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL"/>
              <h3>MySQL</h3>
            </SkillContainer>
          </SkillsContainer>
        </SkillSection>
        <SkillSection>
          <SkillTitle className="skillButton">
            <div>
              <ToolsIcon size="25" />
              <h3>Outras Ferramentas</h3>
            </div>
            <ArrowUp className="up" style={{display: 'none'}}/>
            <ArrowDown className="down"/>
          </SkillTitle>
          <SkillsContainer className="skillContent" style={{display: 'none'}}>
            <SkillContainer>
              <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="Git"/>
              <h3>Git</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux"/>
              <h3>Linux</h3>
            </SkillContainer>
          </SkillsContainer>
        </SkillSection>
      </SkillsSection>
    </Container>
  );
};

export default Skills;
