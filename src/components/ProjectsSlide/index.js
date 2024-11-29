import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import ArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";

import ReceitaAppImage from "../../assets/ReceitaApp.jpeg";
import TrybeWalletImage from "../../assets/TrybeWallet.jpeg";

import ProjectCard from "../ProjectCard";

import { 
  Container, 
  TitleContainer, 
  SwiperContainer, 
  ButtonContainer
} from './styles';

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from "swiper";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const projectData = [
  {
    title: "ReceitaApp",
    description: "O projeto ReceitApp, consiste em uma aplicação Front-End, que simula um aplicativo mobile para realização de receitas, realizando requisições a duas APIS, TheMealDB e The CockTailDB. Possuindo página de receitas, para bebidas e comidas, exploração de novas receitas, acompanhamento do andamento das receitas e sistema de receitas favoritas.",
    image: ReceitaAppImage,
    repository: "https://github.com/GabrielHEB/ReceitasApp"
  },
  {
    title: "Trybe Wallet",
    description: "O projeto Trybe Wallet, tem com objetivo a criação de um carteira de gastos virtuais, para moedas estrangeiras com conversões das moedas para BRL (R$), através de requisições a API de Conversões, awesomeapi e gerenciamento do estado global da aplicação utilizando-se Redux. Além de utilizar Highcharts para a apresentação dos gráficos.",
    image: TrybeWalletImage,
    repository: "https://github.com/GabrielHEB/Wallet.github.io"
  }
];

function ProjectsSlider () {
  return (
    <Container id="Projetos">
      <TitleContainer>
        <h1>Projetos</h1>
        <h2>Meus Principais Projetos Realizados</h2>
      </TitleContainer>
      <SwiperContainer>
        <Swiper
          spaceBetween={50}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
        >
          <SwiperSlide>
            <ProjectCard data={projectData[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard data={projectData[1]} />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
      <ButtonContainer>
        <a href="https://github.com/GabrielHEB?tab=repositories" target="_blank" rel="noreferrer">
          <button>
            <span>
              Veja Mais Projetos!
            </span>
            <ArrowRight size="25" />
          </button>
        </a>
      </ButtonContainer>
    </Container>
  );
};

export default ProjectsSlider;
