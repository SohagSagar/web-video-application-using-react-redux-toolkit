import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/Videos/VideosSlice';
import tagReducer from '../features/tags/tagsSlice';
import videoReducer from '../features/video/videoSlice';
import relatedVideosSlice from '../features/reletedVideos/relatedVideosSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagReducer,
    relatedVideos: relatedVideosSlice,
    filter: filterReducer

  }
});
