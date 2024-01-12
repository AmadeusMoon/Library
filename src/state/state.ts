import themeReducer, { ThemeState } from './reducers/theme';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// Define the AppDispatch type for the dispatch function
export type AppDispatch = typeof store.dispatch;

// Define the root state type based on the individual slice states
export interface RootState {
  theme: ThemeState;
}

export default store;
