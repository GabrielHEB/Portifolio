import styled from "styled-components";
import helper from "../../styles/helper";

export const Container = styled.div`
  padding: 80px 30px 10px;
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

export const SkillsSection = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SkillSection = styled.div`
  width: 45%;
  margin: 15px;
  
  @media (max-width: 767px) {
    width: 100%; 
  };
`;

export const SkillTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.3);

  padding: 10px 20px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.5);
  };

  svg {
    width: 25px;
    height: 25px;
    color: ${props => props.theme.primary2 };
  };

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h3 {
      color: ${props => props.theme.title };
      font-weight: 700;
      font-size: ${helper.h3_font_size_LD};
      margin-left: 10px;
    };
  };

  @media (max-width: 767px) {
    width: 100%;

    div {
      h3 {
        font-size: ${helper.h3_font_size_SD};
      };
    };
  };
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.3);
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 8rem;
  margin: 10px;

  img {
    width: 30px;
    height: 30px;
    filter: brightness(0.9);
  };

  h3 {
    color: ${props => props.theme.title };
    font-weight: ${ helper.font_semi_bold};
    font-size: ${helper.normal_font_size_LD};
  };

  @media (max-width: 767px) {
    h3 {
      font-size: ${helper.normal_font_size_SD};
    };
  };
`;