import styled from "styled-components";
import helper from "../../styles/helper";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px 30px 100px;
  margin: 30px 0 0;
  background-color: ${props => props.theme.primary2 };
  color: ${props => props.theme.primary_lighter };

  h3 {
    font-weight: ${ helper.font_semi_bold };
    font-size: ${ helper.h3_font_size_LD };
  };

  h4, span {
    font-weight: ${ helper.font_medium };
    font-size: ${ helper.normal_font_size_LD };
  };

  @media (max-width: 767px) {
    text-align: center;

    h3 {
      font-size: ${ helper.h3_font_size_SD };
    };

    h4, span {
      font-size: ${ helper.normal_font_size_SD };
    };
  };
`;

export const IconsContainer = styled.div`
  svg {
    margin: 5px;
    color: ${props => props.theme.primary_lighter };
  };
`;
