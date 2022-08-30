import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/Videos/VideosSlice';
import tagReducer from '../features/tags/tagsSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagReducer
  }
});
