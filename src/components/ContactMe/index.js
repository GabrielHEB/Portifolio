import { useRef } from "react";
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";

import CallIcon from "@iconscout/react-unicons/icons/uil-calling";
import LocationIcon from "@iconscout/react-unicons/icons/uil-location-point";
import MailBoxIcon from "@iconscout/react-unicons/icons/uil-fast-mail";
import ArrowIcon from "@iconscout/react-unicons/icons/uil-arrow-right";

import {
  Container,
  TitleContainer,
  ContentContainer,
  InfoContainer,
  FormContainer,
  InfoItem,
  Form,
  Button,
} from "./styles";

function ContactMe() {
  const form = useRef();
  const alert = useAlert()

  const sendEmail = (e) => {
    e.preventDefault();

    if(form.current[0].value === "") return alert.error("Por favor, insira um nome");
    if(form.current[1].value === "") return alert.error("Por favor, insira um email");
    if(form.current[2].value === "") return alert.error("Por favor, insira um assunto");
    if(form.current[3].value === "") return alert.error("Por favor, insira uma mensagem");

    emailjs.sendForm('service_yzw3ljj', 'template_f5nj25b', form.current, 'user_81A4OBoL6n1W1DN5Wcy2z')
      .then((result) => {
        alert.success("Email enviado com sucesso!");
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <Container id='Contato'>
      <TitleContainer>
        <h1>Contato</h1>
        <h2>Entre em contato comigo!</h2>
      </TitleContainer>
      <ContentContainer>
        <InfoContainer>
          <InfoItem>
            <CallIcon/>
            <div>
              <h3>Telefone</h3>
              <span>(12) 98191-1333</span>
            </div>
          </InfoItem>
          <InfoItem>
            <MailBoxIcon/>
            <div>
              <h3>Email</h3>
              <span>gabsheb.dev@gmail.com</span>
            </div>
          </InfoItem>
          <InfoItem>
            <LocationIcon/>
            <div>
              <h3>Localização</h3>
              <span>Cachoeira Paulista - SP</span>
            </div>
          </InfoItem>
        </InfoContainer>
        <FormContainer>
          <Form ref={form} onSubmit={sendEmail}>
            <div>
              <input type="text" placeholder="Nome" name="nome" />
              <input type="email" placeholder="Email" name="email" />
            </div>
            <input type="text" placeholder="Assunto" name="subject" />
            <textarea rows="8" placeholder="Mensagem" name="message" />
            <Button type="submit">
              <span>Mandar Mensagem</span>
              <ArrowIcon size="25" />
            </Button>
          </Form>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
  
export default ContactMe;
