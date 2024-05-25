import React from 'react';
import styled from 'styled-components';
import { FilterContainer, Select } from '../styles/GlobalStyles';


const Filter: React.FC<{ region: string; setRegion: (region: string) => void }> = ({ region, setRegion }) => {
  return (
    <FilterContainer>
      <Select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </FilterContainer>
  );
};

export default Filter;
