import { create } from "zustand";

type StoreType = { adminState: boolean; adminToogle: () => void };

export const useStore = create<StoreType>((set) => ({
  adminState: false,
  adminToogle: () => {
    set((state) => ({ adminState: !state.adminState }));
  },
}));
