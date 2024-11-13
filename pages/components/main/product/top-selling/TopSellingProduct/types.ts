export type TopSellingProductRow = {
  id?: number;
  name?: string;
  description?: string;
  sku?: string;
  stock?: number;
  category_id?: string;
  price?: number;
  user_id?: number;
  image?: string;
  active?: number;
  created_at?: string;
  updated_at?: string;
};

export type TopSellingProductColumn = keyof TopSellingProductRow;

export type TopSellingProductHeader = {
  text: string;
  className: string;
};
