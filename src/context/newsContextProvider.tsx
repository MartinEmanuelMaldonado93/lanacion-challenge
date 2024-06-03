import { ReactNode, useEffect, useState } from "react";
import { NewsContext } from "./newsContext";
import { ApiNewsService } from "../api/apiNewsService";
import { filterBySubtype } from "./utils";

export function NewsContextProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const query = useFetchNews();
  return <NewsContext.Provider value={query}>{children}</NewsContext.Provider>;
}

/** this hook is used only in the context provider */
function useFetchNews() {
  const [news, setNews] = useState([] as News[]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchNews();
    async function fetchNews() {
      try {
        setIsLoading(true);
        const { articles } = await ApiNewsService.getDataNews();
        const newsStateSubtype7 = articles.filter(filterBySubtype);
        setNews(newsStateSubtype7);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return {
    data: news,
    isLoading,
    isError,
  };
}