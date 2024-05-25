import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};


export const getCountryByName = async (name: string) => {
  const response = await axios.get(`${API_URL}/name/${name}`);
  console.log(response, " response");
  return response.data;
};
