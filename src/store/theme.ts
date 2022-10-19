import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ThemeState {
  dark: boolean
  changeMode: () => void
}

export const useThemeStore = create<ThemeState>()(
  devtools(persist(
    (set, get) => ({
      dark: false,
      changeMode: () => set({
        dark: !get().dark
      })
    }),
    {
      name: 'theme-storage'
    }
  ))
);
