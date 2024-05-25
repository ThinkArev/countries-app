import React, { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import { Container } from '../styles/GlobalStyles';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    console.log("this is the homepage");
  }, [searchTerm, region]);

  return (
    <Container>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter region={region} setRegion={setRegion} />
      <CountryList searchTerm={searchTerm} region={region} />
    </Container>
  );
};

export default HomePage;
