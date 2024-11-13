import { create } from "zustand";

export type CategoryStore = {
  category: number;
  setCategory: (value: number) => void;
  clear: () => void;
};

export const useCategoryStore = create<CategoryStore>()((set) => {
  const initial = {
    category: 0,
    setCategory: function (value: number) {
      set({ category: value });
    },
    clear: function () {
      set(initial, true);
    },
  };

  return initial;
});
