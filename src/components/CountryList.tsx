import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../api';
import { Country, CountryListProps } from '../types/Country';
import CountryCard from './CountryCard';
import { ListContainer, Loader, LoaderContainer } from '../styles/GlobalStyles';

const CountryList: React.FC<CountryListProps> = ({ searchTerm, region }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await getAllCountries();
        setCountries(countriesData);
      }
      catch (err) {
        setError(err);
      }
    };

    if (countries.length === 0) fetchCountries();
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (region) {
      filtered = filtered.filter((country) => country.region === region);
    }

    setFilteredCountries(filtered);
  }, [searchTerm, region, countries]);

  if (countries.length === 0 && !error) return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );

  if (error) return (<p>{error}</p>);

  // JSX Element
  return (
    <ListContainer>
      {filteredCountries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </ListContainer>
  );
};

export default React.memo(CountryList);