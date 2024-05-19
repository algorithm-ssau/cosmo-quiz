import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlice';
import authSlice from './slices/authSlice'

export default configureStore({
  reducer: {
    question: questionReducer,
    auth: authSlice
  },
});
