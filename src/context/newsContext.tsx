import { createContext } from "react";

export const NewsContext = createContext<NewsFetchStatus>({
  newsState: [],
  setNewsState: undefined,
} as unknown as NewsFetchStatus);
