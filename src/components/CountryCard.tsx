import React from 'react';
import { Country } from '../types/Country';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Details, ListFlag } from '../styles/GlobalStyles';


const CountryCard: React.FC<{ country: Country }> = ({ country }) => {

  return (
    <Link to={`/country/${country.name.common}`}>
      <Card>
        <ListFlag src={country.flags.png} alt={country.name.common} />
        <Details>
          <h2>{country.name.common}</h2>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital?.join(', ')}</p>
        </Details>
      </Card>
    </Link>
  );
};

export default CountryCard;
