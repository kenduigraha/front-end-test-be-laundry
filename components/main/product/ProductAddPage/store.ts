import { create } from "zustand";
import { persist } from "zustand/middleware";
import { HARDCODE_LINK_UPLOAD_IMAGE } from "../../../utils";

export type ProductAddPageStore = {
  name: string;
  description: string;
  sku: string;
  stock: number;
  category_id: number;
  price: number;
  image: string;
  publish: () => void;
  clear: () => void;
};

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
        publish: function () {
          console.log('publish ',initial)
          get().clear();
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
