import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    overflow-x: hidden;
  }
`;

export const Container = styled.div`
  margin: 20px; /* Set margins all around */
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh; // Full viewport height
`;

export const Loader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.element};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ListFlag = styled.img`
width: 100%;
height: 200px;
object-fit: contain;
`;

export const Details = styled.div`
  padding: 16px;
`;

export const FilterContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
`;

export const Select = styled.select`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.element};
  color: ${(props) => props.theme.colors.text};
`;


export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.element};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const DarkModeToggle = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.element};
  color: ${(props) => props.theme.colors.text};
`;

/*************************************************/

//CountryDetails

export const DetailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin : 20px
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;


export const BackButton = styled(Link)`
  display: inline-flex;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.element};
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
`;

export const FlagContainer = styled.section`
  flex: 0 0 50%;
  margin-right: 20px;
  
`;

export const Flag = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
`;

export const InfoContainer = styled.section`
  flex: 1;
`;

export const InfoTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const InfoGroup = styled.div`
  margin-bottom: 15px;
  display : flex;
`;

export const InfoText = styled.p`
  margin-bottom: 5px;
`;

export const BorderCountries = styled.div`
  margin-top: 20px;
`;

export const BorderCountriesTitle = styled.h3`
  margin-bottom: 10px;
`;

export const BorderCountriesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BorderCountry = styled(Link)`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.element};
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
