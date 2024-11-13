import { Button } from "@material-tailwind/react";

import { useCategoryStore } from "./store";
import { ProductCategoriesQuery, useProductCategoriesQuery } from "../../query";

export function Category() {
  const query = useProductCategoriesQuery();
  const { category, setCategory } = useCategoryStore();

  const categories = query.data || [];

  return (
    <div className="flex w-full flex-col items-start gap-3">
      <div className="w-full text-xl font-normal text-blue-500">{`Category`}</div>
      <div className="flex w-full flex-row flex-wrap items-center gap-3">
        {categories.map((item: ProductCategoriesQuery, index: number) => {
          const active = item.id === category;
          const className = active
            ? `bg-[#3B97CB] text-[#CAECFF] shadow-lg shadow-gray-900/20 focus:opacity-100 focus:shadow-lg active:opacity-100 active:shadow-lg`
            : `shadow-none bg-[#CAECFF] text-[#3B97CB]`;

          return (
            <Button
              key={index}
              className={`${className} p-3`}
              style={{ textTransform: "none" }}
              onClick={() => {
                setCategory(item.id);
              } }
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {item.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
