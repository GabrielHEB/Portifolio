import styled from "styled-components";
import helper from "../../styles/helper";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  background-color: ${props => props.theme.background };

  @media (max-width: 1023px) {
    padding: 10px 30px;
    flex-direction: column;
  };
`;

export const ContentContainer = styled.div`
  margin-left: 10px;
  padding-bottom: 15px;

  h3 {
    font-size: ${ helper.h2_font_size_LD };
    font-weight: ${ helper.font_semi_bold };
    color: ${props => props.theme.title };
  };

  p {
    font-size: ${ helper.small_font_size_LD };
    font-weight: ${ helper.font_medium };
    color: ${props => props.theme.text };
    padding: 20px 25px 20px 5px;
  };

  @media (max-width: 1023px) {
    text-align: center;

    h3 {
      font-size: ${ helper.h2_font_size_SD };
    };

    p {
      font-size: ${ helper.small_font_size_SD };
    };
  };
`;

export const ImageContainer = styled.div`
  padding: 10px;
  width: 100%;

  img {
    width: 100%;
    max-height: 300px;
  };

  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;

    img {
      width: 40%;
      max-width: 100px;
    };
  };
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
  };

  button {
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
  };

  @media (max-width: 1023px) {
    justify-content: center;
    padding-bottom: 10px;

    button {
      span {
        font-size: ${helper.normal_font_size_SD};
      };
    };
  };
`;