// postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('/posts');
    return response.data;
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData) => {
    const response = await axios.post('/posts', postData);
    return response.data;
  }
);

export const createComment = createAsyncThunk(
  'posts/createComment',
  async ({ postId, content }) => {
    console.log( postId, content )
    const response = await axios.post(`/posts/${postId}/comments`, {content});
    return response.data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })
      .addCase(createComment.fulfilled, (state, action) => {
        const { postId, comment } = action.payload;
        const post = state.posts.find(p => p.id === postId);
        if (post) {
          post.comments.push(comment);
        }
      });
  }
});

export default postsSlice.reducer;
