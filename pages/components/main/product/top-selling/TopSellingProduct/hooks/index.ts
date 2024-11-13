import { TopSellingProductRow } from "../types";
import { useGetAllProductQuery } from "./query";
import { headers } from "./src/headers";

export function useTopSellingProduct() {
  const { data } = useGetAllProductQuery();
  const rows  = data.response.map((product: TopSellingProductRow) => ({ name: product.name, price: product.price}))
  return {
    headers,
    rows,
  };
}

