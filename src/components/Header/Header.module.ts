import styled from "styled-components";

const HeaderWrapper=styled.div`
display: flex;
justify-content: space-between;

  .logo-section{
    display: flex;
    gap: 5px;
    align-items: center;
  } 

  .logo-section img{
    height: 50px;
    
  }


`

const FlexWrapper=styled.div`
display: flex;
justify-content: center;
align-items: center;
`


export {FlexWrapper,HeaderWrapper}