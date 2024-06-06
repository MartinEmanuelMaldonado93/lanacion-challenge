import { ReactNode } from "react";
import { ApiNewsService } from "../api/apiNewsService";
import { useFetch } from "./hooks";
import { NewsContext } from "./newsContext";

export function NewsContextProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const query = useFetch(ApiNewsService.getDataNews);
  return (
    <NewsContext.Provider
      value={{
        data: query.data?.articles || [],
        isError: query.isError,
        isLoading: query.isLoading,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
