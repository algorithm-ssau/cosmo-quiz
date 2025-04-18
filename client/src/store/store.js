import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlice';
import authSlice from './slices/authSlice'
import topicSlice from './slices/topicSlice'
import  prizeSlice  from './slices/prizeSlice';

export default configureStore({
  reducer: {
    question: questionReducer,
    auth: authSlice,
    topic: topicSlice,
    prize: prizeSlice
  },
});
