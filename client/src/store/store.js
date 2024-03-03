import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlice';

export default configureStore({
  reducer: {
    question: questionReducer,
  },
});
