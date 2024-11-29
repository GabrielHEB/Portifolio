import styled from "styled-components";
import helper from "../../styles/helper";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 30px 10px;
  background-color: ${props => props.theme.background };
`;

export const TitleContainer = styled.div`
  text-align: center;

  h1 {
    color: ${props => props.theme.title };
    font-weight: 700;
    font-size: ${ helper.h1_font_size_LD };
  };

  h2 {
    color: ${props => props.theme.title };
    font-weight: ${ helper.font_semi_bold};
    font-size: ${helper.normal_font_size_LD};
    margin-bottom: 30px;
  };

  @media (max-width: 767px) {
    h1 {
      font-size: ${ helper.h1_font_size_SD };
    };

    h2 {
      font-size: ${helper.normal_font_size_SD};
    };
  };
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0;
  };
`;

export const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 25px;

  img {
    width: 100%;
  };

  @media (max-width: 767px) {
    width: 60%;
    padding: 0;
  };
`;

export const TextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px;

  p {
    color: ${props => props.theme.text };
    font-size: ${helper.normal_font_size_LD};
    margin-bottom: 10px;
  };

  a {
    text-decoration: none;
    width: 100%;
  };

  @media (max-width: 767px) {
    width: 80%;
    text-align: center;
    padding: 25px 0;

    p {
      font-size: ${helper.normal_font_size_SD};
    };
  };
`;

export const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 15px 25px;
`;

export const ExperienceItem = styled.div`
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: ${props => props.theme.title };
    font-weight: 600;
    font-size: ${ helper.h3_font_size_LD };
  };

  p {
    color: ${props => props.theme.text_lighter };
    font-size: ${ helper.smaller_font_size_LD };
    text-align: center;
  };

  @media (max-width: 767px) {
    h3 {
      font-size: ${ helper.h3_font_size_SD };
    };

    p {
      font-size: ${ helper.smaller_font_size_SD };
    };
  };
`;

export const Button = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary2 };
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.primary_lighter };

  span {
    font-size: ${helper.normal_font_size_LD};
    font-weight: ${helper.font_semi_bold};
    margin-right: 10px;
  };

  &:hover {
    background-color: ${props => props.theme.primary1 };
    cursor: pointer;
  };

  @media (max-width: 767px) {
    margin: 10px auto 0;

    span {
      font-size: ${helper.normal_font_size_SD};
    };
  };
`;