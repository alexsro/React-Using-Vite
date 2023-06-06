import axios from "axios";
import { api_key, base_url } from "../../../config/movies_db_config";

export const theMoviesDB = axios.create({
  baseURL: base_url,
  params: {
    api_key: api_key
  }
});

