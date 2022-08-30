import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/Videos/VideosSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    // counter: counterReducer,
  }
});
