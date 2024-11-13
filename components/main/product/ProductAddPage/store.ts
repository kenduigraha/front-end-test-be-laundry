import { create } from "zustand";
import { persist } from "zustand/middleware";
import { API_BASE_URL, HARDCODE_LINK_UPLOAD_IMAGE, POST_NEW_PRODUCT_END_POINT, STATIC_AUTH_TOKEN } from "../../../utils";

export type ProductAddPageStore = {
  name: string;
  description: string;
  sku: string;
  stock: number;
  category_id: number;
  price: number;
  image: string;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setSKU: (sku: string) => void;
  setStock: (stock: number) => void;
  setCategoryId: (category_id: number) => void;
  setPrice: (price: number) => void;
  setImage: (image: string) => void;
  publish: () => void;
  clear: () => void;
};

async function postNewProduct(requestBody) {
  try {
    const res = await fetch(
      `${API_BASE_URL}${POST_NEW_PRODUCT_END_POINT}`
      ,{
        method: "POST",
        headers: {
          "token": STATIC_AUTH_TOKEN // use static auth token from postman
        },
        body: JSON.stringify(requestBody),
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

export const useProductAddPageStore = create<ProductAddPageStore>()(
  persist(
    (set, get) => {
      const initial = {
        name: "",
        description: "",
        sku: "",
        stock: 0,
        category_id: 0,
        price: 0,
        image: HARDCODE_LINK_UPLOAD_IMAGE, // hardcode, there's no upload image and upload to AWS s3
        setName: (name: string) => set({ name }),
        setDescription: (description: string) => set({ description }),
        setSKU: (sku: string) => set({ sku }),
        setStock: (stock: number) => set({ stock }),
        setCategoryId: (category_id: number) => set({ category_id }),
        setPrice: (price: number) => set({ price }),
        setImage: (image: string) => set({ image }),
        publish: function () {
          const dataSubmit = get();
          postNewProduct(dataSubmit).then(resp => {
            if (resp.status) {
              // clear form is success submit data
              get().clear();
            }
          });
        },
        clear: function () {
          set(initial, true);
        },
      };

      return initial;
    },
    {
      name: "/product",
    },
  ),
);
