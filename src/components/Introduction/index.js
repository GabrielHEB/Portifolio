import LinkedinIcon from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import GitHubIcon from "@iconscout/react-unicons/icons/uil-github-alt";
import EmailIcon from "@iconscout/react-unicons/icons/uil-fast-mail-alt";
import SendIcon from "@iconscout/react-unicons/icons/uil-envelope-send";

import BlobImage from "../../assets/perfil.png";

import { 
  Container, 
  IconsContainer, 
  TextContainer, 
  Button, 
  ImageContainer, 
  ImageContainerMobile, 
  ContainerMobile 
} from "./styles";

function Introduction() {
  return (
    <Container>
      <ContainerMobile>
        <IconsContainer>
          <a href="https://br.linkedin.com/in/gabriel-henrique-7939b3304" target="_blank" rel="noreferrer">
            <LinkedinIcon size="25"/>
          </a>
          <a href="https://github.com/GabrielHEB" target="_blank" rel="noreferrer">
            <GitHubIcon size="25" />
          </a>
          <a href="mailto: gabsheb.dev@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon size="25" />
          </a>
        </IconsContainer>
        <ImageContainerMobile>
         <img src={BlobImage} alt="Imagem de Perfil" />
        </ImageContainerMobile>
      </ContainerMobile>
      <TextContainer>
        <h1>Prazer, sou Gabriel</h1>
        <h2>Desenvolvedor Front-end</h2>
        <p>Atualmente desenvolvedor Front-End em busca de uma oportunidade no mercado. Caso queira saber mais, é só rolar para baixo!</p>
        <a href="#Contato">
          <Button>
            <span>
              Entre Em Contato Comigo!
            </span>
            <SendIcon size="25" />
          </Button>
        </a>
      </TextContainer>
      <ImageContainer>
        <img src={BlobImage} alt="Imagem de Perfil"/>
      </ImageContainer>
    </Container>
  );
}
  
export default Introduction;
