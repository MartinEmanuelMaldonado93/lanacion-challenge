import { NewsContext } from "@context";
import { useContext } from "react";

/** this hook is public to all components to consume the context */
export function useNewsContext() {
  const query = useContext(NewsContext);
  if (query === undefined)
    throw new Error("El hook debe utilizarse dentro del news provider");

  return query;
}
