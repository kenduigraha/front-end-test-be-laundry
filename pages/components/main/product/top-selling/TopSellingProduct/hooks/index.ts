import { useGetAllProductQuery } from "./query";
import { headers } from "./src/headers";

export function useTopSellingProduct() {
  const query = useGetAllProductQuery();
  const isLoading = [
    query.isInitialLoading,
    query.isLoading,
    query.isFetching,
    query.isRefetching,
  ].reduce((a, b) => {
    return a || b;
  });
  return {
    headers,
    rows: query.data,
    isLoading,
    error: query.error,
  };
}

