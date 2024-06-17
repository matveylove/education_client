import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import schoolSlice from '../features/school/schoolSlice';
import studentSlice from '../features/student/studentSlice';
import postsSlice from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    schools: schoolSlice,
    students: studentSlice,
    posts: postsSlice
  },
})