import { create } from "zustand";

interface ICommonStore {
    keywords: string;
    search: (keywords: string) => void;
}

export const useCommonStore = create<ICommonStore>((set) => ({
  keywords: '',
  search: (keywords: string) => set({ keywords }),
}));
