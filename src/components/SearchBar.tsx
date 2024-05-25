import React from 'react';
import styled from 'styled-components';
import { Container, Input } from '../styles/GlobalStyles';

const SearchBar: React.FC<{ searchTerm: string; setSearchTerm: (term: string) => void }> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
