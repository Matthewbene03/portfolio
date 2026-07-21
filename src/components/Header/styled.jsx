import styled from "styled-components";
import * as color from "../../config/color"

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 100px;
  padding: 0px 150px;
  
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  background: rgba(8, 9, 9, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(165, 104, 25, 0.15);
  color: ${color.colorTextBase};
  
  z-index: 1000;
  
  .btnAncora{    
    margin-right: 10px;
    font-weight: bold;
    text-decoration: none;
  }

  .btnAncora:hover{
    border-bottom: 2px solid ${color.CorCinza};
  }
`;

export const ImgLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;