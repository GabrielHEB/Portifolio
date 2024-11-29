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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;

  span {
    font-size: ${helper.h3_font_size_LD};
    font-weight: ${ helper.font_semi_bold};
    margin-left: 5px;

    color: ${({ active, theme }) => active ? theme.primary2 : theme.title }
  };

  svg {
    color: ${({ active, theme }) => active ? theme.primary2 : theme.title }
  };

  &:hover {
    background-color: ${props => props.theme.name === 'light' ? props.theme.primary_lighter : props.theme.text_lighter};
    filter: brightness(0.9);
    cursor: pointer;
  };

  @media (max-width: 767px) {
    span {
      font-size: ${helper.h3_font_size_SD};
    };
  };
`;

export const Rounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color:  ${props => props.theme.primary1 };
  border-radius: 50%;

  @media (max-width: 767px) {
    width: 12px;
    height: 12px;
  };
`;

export const Line = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color:  ${props => props.theme.primary1 };
  transform: translate(6px, -7px);
`;

export const EndLine = styled.span`
  display: block;
  width: 1px;
  height: 50%;
  background-color:  ${props => props.theme.text_lighter };
  transform: translate(6px, -7px);
`;

export const SelectedLine = styled.span`
  width: 40px;
  background-color: ${props => props.theme.primary2 };
  height: 2px;
  margin-top: 5px;
`;

export const QualificationData = styled.span`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
`;

export const QualificationItem = styled.span`
  h3 {
    color: ${props => props.theme.title };
    font-weight: ${ helper.font_semi_bold };
    font-size: ${ helper.h3_font_size_LD };
  };

  h4 {
    color: ${props => props.theme.text };
    font-weight: ${ helper.font_medium };
    font-size: ${ helper.normal_font_size_LD };
  };

  @media (max-width: 767px) {
    h3 {
      font-size: ${ helper.h3_font_size_SD };
    };

    h4 {
      font-size: ${ helper.normal_font_size_SD };
    };
  };
`;

export const DateItem = styled.span`
  display: flex;
  align-items: center;
  padding: 5px;

  svg {
    color: ${props => props.theme.text_lighter };
    width: 15px;
  };

  span {
    margin-left: 10px;
    font-size: ${ helper.smaller_font_size_LD };
    color: ${props => props.theme.text_lighter };
  };
`;