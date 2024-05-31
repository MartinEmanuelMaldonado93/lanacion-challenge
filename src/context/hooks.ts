import { NewsContext } from "@context";
import { useContext } from "react";

export function useNewsContext() {
  const { newsState, setNewsState } = useContext(NewsContext);
  if (newsState === undefined || setNewsState === undefined)
    throw new Error("El hook debe utilizarse dentro del news provider");

  return [newsState, setNewsState] as const;
}
