import styled from "styled-components";
import { ColorsConstants, ThemeColorsConstant } from "../ReuseCompo/colorContast.ts";


export const SearchBarWrapper=styled.div`
  position: relative;
  background-color: ${ColorsConstants.background};
  padding: 10px 15px;
  border-radius: 5px;

  input{
    border: none;
    background-color: ${ColorsConstants.background};
    padding-left: 5px;
    padding-right:20px;
  }

  input:focus{
    outline: none;
    box-shadow: none;
    border: none;
  }

  
  .searchBtn{
    position:  absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-40%);
  }
  
`