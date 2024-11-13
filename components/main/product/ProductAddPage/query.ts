import { useQuery } from "@tanstack/react-query";

import { API_BASE_URL, GET_ALL_PRODUCT_CATEGORIES, STATIC_AUTH_TOKEN } from "../../../utils";

export type ProductCategoriesQuery = {
  id: number;
  name: string;
};

async function fetchProductCategories() {
  try {
    const res = await fetch(
      `${API_BASE_URL}${GET_ALL_PRODUCT_CATEGORIES}`
      ,{
        method: "GET",
        headers: {
          "token": STATIC_AUTH_TOKEN // use static auth token from postman
        },
      }
    );
    const data = await res.json();

    const categories = data.response || [];

    if (data) return categories;
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

export function useProductCategoriesQuery() {
  return useQuery({
    retry: 0,
    queryKey: [GET_ALL_PRODUCT_CATEGORIES],
    queryFn: () => fetchProductCategories(),
  });
}
