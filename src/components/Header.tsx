import React from 'react';
import styled from 'styled-components';
import { DarkModeToggle, HeaderContainer, Title } from '../styles/GlobalStyles';


const Header: React.FC<{ darkMode: boolean; toggleDarkMode: () => void }> = ({ darkMode, toggleDarkMode }) => {
  return (
    <HeaderContainer>
      <Title>Where in the world?</Title>
      <DarkModeToggle onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </DarkModeToggle>
    </HeaderContainer>
  );
};

export default Header;
