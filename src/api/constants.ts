if (!import.meta.env.VITE_ARTICLES_URL) {
  throw new Error("Environment key not founded");
}

export const ARTICLES_URL = import.meta.env.DEV
  ? "/data.json"
  : import.meta.env.VITE_ARTICLES_URL;

export const BASE_URL_DUMMY = "/data.json";
