import React, { useState, useEffect } from 'react';
import { getCountries } from './utils/http';
import { getCountriesByName } from './utils/strings';
import Grid from './components/Grid';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState<string>("");

  // Carga inicial
  useEffect(() => {
    const fetchAPIData = async () => {
      try {
        const { data } = await getCountries();
        setCountries(data);
        setFilteredCountries(data);
      } catch(err) {
        console.error(err);
      }
    };

    fetchAPIData();
  }, []);

  // Filtrar paises al escribir
  useEffect(() => {
    if (search.trim() !== "") {
      const newFilteredCountries = getCountriesByName(search, countries);
      setFilteredCountries(newFilteredCountries);
    } else {
      setFilteredCountries(countries);
    }
  }, [search]);

  // Maneja la busqueda de paises
  const handleSearch = (newSearch: string) => {
    setSearch(newSearch);
  };

  return (
    <div className="m-6 flex flex-col gap-2">
      <input type="text" value={search} onChange={(e) => handleSearch(e.target.value)} className="border border-solid border-neutral-800 rounded-sm" placeholder="Escribe el nombre de un país acá." />
     {!!filteredCountries.length && <Grid countries={filteredCountries}/>}
    </div>
  );
}

export default App;
