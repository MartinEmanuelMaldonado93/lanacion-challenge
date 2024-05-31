import { ReactNode, useEffect, useMemo, useState } from "react";
import { ApiNewsService } from "@api";
import { NewsContext } from "./newsContext";
import { filterBySubtype } from "./utils";

export function NewsContextProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [newsState, setNewsState] = useState([] as News[]);

  useEffect(() => {
    ApiNewsService.getDataNews().then(({ articles }) => {
      const newsStateSubtype7 = articles.filter(filterBySubtype);
      setNewsState(newsStateSubtype7);
    });
  }, []);

  const memoizedContext = useMemo(
    () => ({ newsState, setNewsState }),
    [newsState]
  );
  return (
    <NewsContext.Provider value={memoizedContext}>
      {children}
    </NewsContext.Provider>
  );
}
