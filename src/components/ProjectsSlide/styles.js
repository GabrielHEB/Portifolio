import styled from "styled-components";
import helper from "../../styles/helper";

export const SwiperContainer = styled.section`
  padding: 50px 100px 0;
  background-color: ${props => props.theme.background };

  .swiper-button-next, .swiper-button-prev {
    color: ${props => props.theme.primary2 };
  };

  .swiper-wrapper {
    width: 100%;
  };
  
  .swiper-pagination-bullet-active {
    background-color: ${props => props.theme.primary2 };
  };

  @media (max-width: 1023px) {
    padding: 40px 50px 0;
  };

  @media (max-width: 767px) {
    padding: 30px 20px 0;
  };
`;

export const Container = styled.section`
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

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