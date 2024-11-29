import { Link } from "react-router-dom";

import ErrorImg from "../../assets/error.png";

import { 
  Container, 
  Title, 
  SubTitle, 
  ImgContainer, 
  ButtonContainer, 
  Button 
} from "./styles";

function NotFound() {

  return (
    <Container>
      <Title>
        404
      </Title>
      <SubTitle>
        <span>oops...</span>
        <span>página não encontrada</span>
      </SubTitle>
      <ImgContainer>
        <img src={ ErrorImg } alt='Imagem de Error' />
      </ImgContainer>
      <ButtonContainer>
        <Link to='/' style={{textDecoration: 'none'}}>
          <Button>
            <span>Voltar a Página Inicial</span>
          </Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
}
  
export default NotFound;
