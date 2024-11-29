import PropTypes from "prop-types";
import ArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";

import { 
  Container, 
  ImageContainer, 
  ContentContainer, 
  ButtonContainer 
} from "./styles";

function ProjectCard({ data }) {
  const { title, description, image, repository } = data;

  return (
    <Container>
      <ImageContainer>
        <img src={image} alt={`Project ${title}`} />
      </ImageContainer>
      <ContentContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <ButtonContainer>
          <a href={repository} target="_blank" rel="noreferrer">
            <button>
              <span>Repositório</span>
              <ArrowRight />
            </button>
          </a>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
}

// Defina os tipos esperados para as propriedades
ProjectCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
