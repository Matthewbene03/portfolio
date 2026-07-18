import styled from "styled-components";
import * as color from "../../config/color"

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 20px 150px;

  color: ${color.colorTextBase};
  
  a{
    margin-right: 10px;
    font-weight: bold;
  }

  a:hover{
    border-bottom: 2px solid ${color.CorCinza};
  }
`;

export const ImgLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;