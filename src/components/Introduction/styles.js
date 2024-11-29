import styled from "styled-components";
import helper from "../../styles/helper";

export const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 30px;
  margin: 80px 0 0;
  background-color: ${props => props.theme.background};

  @media (max-width: 767px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-right: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${props => props.theme.primary2};
    padding: 5px;
    margin: 15px 0;
    border-radius: 3px;

    &:hover {
      background-color: ${props => props.theme.primary_lighter};
      filter: brightness(0.9);
    }
  }
`;

export const TextContainer = styled.div`
  width: 50%;

  h1 {
    color: ${props => props.theme.title};
    font-weight: 700;
    font-size: ${helper.h1_font_size_LD};
  }

  h2 {
    color: ${props => props.theme.title};
    font-weight: ${helper.font_semi_bold};
    font-size: ${helper.h3_font_size_LD};
    margin-bottom: 20px;
  }

  p {
    color: ${props => props.theme.text};
    font-size: ${helper.normal_font_size_LD};
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    width: 80%;
    text-align: center;

    h1 {
      font-size: ${helper.h1_font_size_SD};
    }

    h2 {
      font-size: ${helper.h3_font_size_SD};
    }

    p {
      font-size: ${helper.normal_font_size_SD};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary2};
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.primary_lighter};

  span {
    font-size: ${helper.normal_font_size_LD};
    font-weight: ${helper.font_semi_bold};
    margin-right: 10px;
  }

  &:hover {
    background-color: ${props => props.theme.primary1};
    cursor: pointer;
  }

  @media (max-width: 767px) {
    margin: 30px auto 0;

    span {
      font-size: ${helper.normal_font_size_SD};
    }
  }
`;

export const ImageContainer = styled.div`
  width: 14rem;
  margin-left: 40px;
  fill: ${props => props.theme.primary2};

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ImageContainerMobile = styled.div`
  display: none;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    display: block;
    width: 12rem;
    margin-left: 40px;
    fill: ${props => props.theme.primary2};
  }
`;

export const ContainerMobile = styled.div`
  display: flex;
  align-items: center;
`;
