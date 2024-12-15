import React from 'react';
import { FlexWrapper, HeaderWrapper } from './Header.module.ts';
import { Container, TitleLogoText } from '../ReuseCompo/styles.module.ts';
import SearchBar from '../Searchbar/SearchBar.tsx';


const Header:React.FC=()=> {
  return <HeaderWrapper>
    <Container flex justify="space-between">
      {/**Phần logo */}
      <div className="logo-section">
        <img src="./assets/mainImg/logo.png" alt="logo"/>
        <TitleLogoText>SkyScope</TitleLogoText>
    </div>
    {/**Thanh tìm kiếm */}
    <FlexWrapper>
      <SearchBar/>
    </FlexWrapper>
    </Container>

  </HeaderWrapper>
}
export default Header
