import { create } from 'zustand';

const useStore = create((set) => ({
  tabs: [],
  setTabs: (newTabs) => set({ tabs: newTabs }),
}));

export default useStore;
