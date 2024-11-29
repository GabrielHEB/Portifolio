import styled from "styled-components";
import helper from "../../styles/helper";

export const Container = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 20;
    background-color: ${props => props.theme.background };
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.20);
  };
`;

export const ButtonsContainer = styled.div`
  display: none;
`;

export const ButtonsItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ButtonsItem = styled.a`
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  text-decoration: none;

  span {
    font-size: ${ helper.smaller_font_size_SD };
    font-weight: ${ helper.font_semi_bold };
    color: ${props => props.theme.title };
  };

  svg {
    fill: ${props => props.theme.title };
  };
`;

export const HeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const HeaderMobileName = styled.div`
  font-size: ${ helper.h2_font_size_SD };
  font-weight: ${ helper.font_semi_bold };
  color: ${props => props.theme.title };
`;

export const HeaderMobileButtons = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;

  svg {
    fill: ${props => props.theme.title };
  };
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;