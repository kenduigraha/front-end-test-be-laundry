import { useQuery } from "@tanstack/react-query";

import { API_BASE_URL, GET_ALL_PRODUCT_END_POINT, STATIC_AUTH_TOKEN } from "../../../../../utils";

export type ProductReportQuery = {
  created_at: string;
  total: number;
  income: string;
}[];

async function fetchAllProduct(filterDate) {
  try {
    const res = await fetch(
      `${API_BASE_URL}${GET_ALL_PRODUCT_END_POINT}?date=${filterDate}`
      ,{
        method: "GET",
        headers: {
          "token": STATIC_AUTH_TOKEN // use static auth token from postman
        },
      }
    );
    const data = await res.json();

    if (data) return data;
    return [];
  } catch (error) {
    console.log('error: ', error)
    throw new Error(
      [
        "Oops! Something Went Wrong",
        "Please Try Again",
      ].join("\n"),
    ); 
  }
}

export function useGetAllProductQuery(filterDate = '') {
  return useQuery({
    retry: 0,
    queryKey: [GET_ALL_PRODUCT_END_POINT],
    queryFn: () => fetchAllProduct(filterDate),
  });
}
