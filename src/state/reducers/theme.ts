import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  theme: 'DarkTheme' | 'LightTheme';
}

const initialState = { theme: 'LightTheme' } as ThemeState;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeChange(state: ThemeState) {
      state.theme = state.theme === 'LightTheme' ? 'DarkTheme' : 'LightTheme';
    },
  },
});

export const { themeChange } = themeSlice.actions;

export default themeSlice.reducer;
