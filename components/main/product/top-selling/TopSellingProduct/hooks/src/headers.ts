import { TopSellingProductColumn, TopSellingProductHeader } from "../../types";

export const headers: {
  [k in TopSellingProductColumn]: TopSellingProductHeader;
} = {
  name: {
    text: "Name",
    className: "text-left",
  },
  price: {
    text: "Value",
    className: "text-center",
  },
  id: {
    text: "",
    className: ""
  },
  image: {
    text: "",
    className: ""
  },
  description: {
    text: "",
    className: ""
  },
  sku: {
    text: "",
    className: ""
  },
  stock: {
    text: "",
    className: ""
  },
  category_id: {
    text: "",
    className: ""
  },
  user_id: {
    text: "",
    className: ""
  },
  active: {
    text: "",
    className: ""
  },
  created_at: {
    text: "",
    className: ""
  },
  updated_at: {
    text: "",
    className: ""
  }
};
