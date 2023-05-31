import axios from "axios";

export const theMoviesDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'deaeb4fb722f8cc46a132549eaf3ca28'
  }
});
