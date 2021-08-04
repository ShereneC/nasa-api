import axios from "axios";

export const apodApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/',
  timeout: 5000
})