import axios from 'axios';

const http = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
  timeout: 1000,
});

export const getCountries = () => http.get('all');

export default http;