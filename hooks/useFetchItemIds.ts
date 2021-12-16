import { useCallback } from "react";

import { useFetch } from "./useFetch";

type UseFetchItemsReturn = (key: string | string[] | undefined) => Promise<number[]>;
type UseFetchItems = () => UseFetchItemsReturn;

export const useFetchItemIds: UseFetchItems = () => {
  const fetch = useFetch();

  return useCallback(
    (key: string | string[] | undefined): Promise<number[]> =>
      fetch(`${key}stories`).then((response: number[]) => response),
    [fetch]
  );
};
