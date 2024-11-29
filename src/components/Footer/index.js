import FacebookIcon from "@iconscout/react-unicons/icons/uil-facebook";
import InstagramIcon from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedinIcon from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import {
    Container,
    IconsContainer
} from "./styles";

function Footer() {
  return (
    <Container>
      <div>
        <h3>Gabriel Henrique</h3>
        <h4>Front-end Developer</h4>
      </div>
      <IconsContainer>
        <a href="https://www.facebook.com/gabriel.henrique.9400984?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/gabs.heb/profilecard/?igsh=YzVmdHMyMG85dWVj" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://br.linkedin.com/in/gabriel-henrique-7939b3304" target="_blank" rel="noreferrer">
          <LinkedinIcon />
        </a>
      </IconsContainer>
    </Container>
  );
}

export default Footer;
