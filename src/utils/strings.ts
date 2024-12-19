export const getCountriesByName = (query: string, countries: Array<any>) => {
  const cleanQuery = query.trim().toLocaleLowerCase();

  const filteredCountries = countries.filter((country) => {
    const name = country.name.common.trim().toLocaleLowerCase();
    return name.includes(cleanQuery);
  });

  return filteredCountries;
};