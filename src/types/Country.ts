export interface Country {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  borders: string[];
  population: number;
  flags: {
    svg: string;
    png: string;
  };
}

export interface CountryListProps {
  searchTerm: string;
  region: string;
}