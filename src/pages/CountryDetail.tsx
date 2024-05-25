import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Country } from '../types/Country';
import { getCountryByName } from '../api';
import {
  BackButton, BorderCountries, BorderCountriesList, BorderCountriesTitle, BorderCountry, Container, DetailedContainer, Flag, FlagContainer, Header, InfoContainer, InfoGroup
  , InfoText, InfoTitle, Loader, LoaderContainer, Main
} from '../styles/GlobalStyles';

const CountryDetail: React.FC = () => {
  const { countryName } = useParams<{ countryName: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchCountryDetails = async () => {
      if (countryName) {
        try {
          const data = await getCountryByName(countryName);
          if (data.length > 0) {
            setCountry(data[0]);
          } else {
            setError('No country found');
          }
        } catch (err) {
          setError('Failed to fetch country data');
        }
      }
    };

    fetchCountryDetails();
  }, [countryName]);

  if (error) return <p>{error}</p>;

  if (!country) return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>)

  return (
    <DetailedContainer>
      <Header>
        <BackButton to="/">← Back</BackButton>
      </Header>
      <Main>
        <FlagContainer>
          <Flag src={country.flags.svg} alt={`${country.name.common} flag`} />
        </FlagContainer>
        <InfoContainer>
          <InfoTitle>{country.name.common}</InfoTitle>
          <InfoGroup>
            <InfoContainer>
              <InfoText><strong>Native Name:</strong> {Object.values(country.name.nativeName)[0].common}</InfoText>
              <InfoText><strong>Population:</strong> {country.population.toLocaleString()}</InfoText>
              <InfoText><strong>Region:</strong> {country.region}</InfoText>
              <InfoText><strong>Sub Region:</strong> {country.subregion}</InfoText>
              <InfoText><strong>Capital:</strong> {country.capital}</InfoText>
              {/* <InfoGroup> */}
            </InfoContainer>

            <InfoContainer>

              <InfoText><strong>Top Level Domain:</strong> {country.tld.join(', ')}</InfoText>
              <InfoText><strong>Currencies:</strong> {Object.values(country.currencies).map((currency) => currency.name).join(', ')}</InfoText>
              <InfoText><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</InfoText>
              {/* </InfoGroup> */}
            </InfoContainer>
          </InfoGroup>

          {country.borders && country.borders.length > 0 && (
            <BorderCountries>
              <BorderCountriesTitle>Border Countries:</BorderCountriesTitle>
              <BorderCountriesList>
                {country.borders.map((border) => (
                  <BorderCountry key={border} to={`/country/${border}`}>{border}</BorderCountry>
                ))}
              </BorderCountriesList>
            </BorderCountries>
          )}
        </InfoContainer>
      </Main>
    </DetailedContainer>
  )

  // return (
  //   <Container>
  //     <div> <BackButton to="/">← Back</BackButton></div>

  //     <InfoContainer>
  //       <InfoSection>
  //         <Flag src={country.flags.svg} alt={`${country.name.common} flag`} />
  //       </InfoSection>
  //       <InfoSection>
  //         <InfoContainer>
  //           <InfoSection>
  //             <InfoTitle>{country.name.common}</InfoTitle>
  //             <InfoText><strong>Native Name:</strong> {Object.values(country.name.nativeName)[0].common}</InfoText>
  //             <InfoText><strong>Population:</strong> {country.population.toLocaleString()}</InfoText>
  //             <InfoText><strong>Region:</strong> {country.region}</InfoText>
  //             <InfoText><strong>Sub Region:</strong> {country.subregion}</InfoText>
  //             <InfoText><strong>Capital:</strong> {country.capital}</InfoText>
  //           </InfoSection>
  //           <InfoSection>
  //             <InfoText><strong>Top Level Domain:</strong> {country.tld.join(', ')}</InfoText>
  //             <InfoText><strong>Currencies:</strong> {Object.values(country.currencies).map((currency) => currency.name).join(', ')}</InfoText>
  //             <InfoText><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</InfoText>
  //             {country.borders && country.borders.length > 0 && (
  //               <BorderCountries>
  //                 <h3>Border Countries:</h3>
  //                 {country.borders.map((border) => (
  //                   <BorderCountry key={border} to={`/country/${border}`}>{border}</BorderCountry>
  //                 ))}
  //               </BorderCountries>
  //             )}
  //           </InfoSection>
  //         </InfoContainer>
  //       </InfoSection>

  //     </InfoContainer>
  //   </Container >
  // );
};

export default React.memo(CountryDetail);
