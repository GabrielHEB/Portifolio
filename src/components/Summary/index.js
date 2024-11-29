import DownloadIcon from "@iconscout/react-unicons/icons/uil-download-alt";
import curriculoPdf from "../../assets/curriculo.pdf";

import AboutImage from "../../assets/about.jpeg";

import {
  Container,
  TitleContainer,
  ContentContainer,
  ImageContainer,
  TextContainer,
  ExperienceContainer,
  ExperienceItem,
  Button
} from "./styles";

function Summary() {
  return (
    <Container id="Sobre">
      <TitleContainer>
        <h1>Sobre Mim</h1>
        <h2>Minha Introdução</h2>
      </TitleContainer>
      <ContentContainer>
        <ImageContainer>
          <img alt="Foto Summary" src={AboutImage} />
        </ImageContainer>
        <TextContainer>
          <p>
            Sou desenvolvedor front-end formado pela escola de tecnologias Trybe, 
            com conhecimentos também em back-end, buscando criar soluções completas e eficientes.
          </p>
          <ExperienceContainer>
            <ExperienceItem>
              <h3>
                00
              </h3>
              <p>
                Anos de Experiência
              </p>
            </ExperienceItem>
            <ExperienceItem>
              <h3>
                6+
              </h3>
              <p>
                Repositórios Criados
              </p>
            </ExperienceItem>
            <ExperienceItem>
              <h3>
                00
              </h3>
              <p>
                Experiências Profissionais
              </p>
            </ExperienceItem>
          </ExperienceContainer>
          <a download="Curriculo_Gabriel_Henrique" href={curriculoPdf}>
            <Button>
              <span>
                Baixe Meu Currículo
              </span>
              <DownloadIcon size="25" />
            </Button>
          </a>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
}

export default Summary;
