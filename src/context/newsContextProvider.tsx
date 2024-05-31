import { ReactNode, useEffect, useState } from "react";
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
  return (
    <NewsContext.Provider value={{ newsState, setNewsState }}>
      {children}
    </NewsContext.Provider>
  );
}
