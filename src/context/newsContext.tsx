import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

type NewsStateContext = {
  newsState: News[];
  setNewsState: Dispatch<SetStateAction<News[]>>;
};

export const NewsContext = createContext<NewsStateContext>({
  newsState: [],
  setNewsState: undefined,
} as unknown as NewsStateContext);
