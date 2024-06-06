import { NewsContext } from "@context";
import { useContext, useEffect, useState } from "react";

/** this hook is public to all components to consume the context */
export function useNewsContext() {
  const query = useContext(NewsContext);
  if (query === undefined)
    throw new Error("El hook debe utilizarse dentro del news provider");

  return query;
}

export function useFetch<T extends object>(callback: () => Promise<T>) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await callback();
        setData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  }, [callback]);

  return {
    data,
    isLoading,
    isError,
  };
}
