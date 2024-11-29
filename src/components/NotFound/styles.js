import styled from "styled-components";
import helper from "../../styles/helper";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.background };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 100px;
  font-weight: ${ helper.font_semi_bold };
  color: ${props => props.theme.title };
`;

export const SubTitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  span {
    font-size: ${ helper.h3_font_size_LD };
    font-weight: ${ helper.font_semi_bold };
    color: ${props => props.theme.title };
  };
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  img {
    width: 200px;
  };
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary2 };
  padding: 20px;
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.primary_lighter };
  
  span {
    font-size: ${helper.h3_font_size_LD};
    font-weight: ${helper.font_semi_bold};
    margin-right: 10px;
  };

  &:hover {
    background-color: ${props => props.theme.primary1 };
    cursor: pointer;
  };

  @media (max-width: 767px) {
    margin: 30px auto 0;

    span {
      font-size: ${helper.h3_font_size_SD};
    };
  };
`;
