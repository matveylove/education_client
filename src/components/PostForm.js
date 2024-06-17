// PostForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useDispatch} from 'react-redux';
import { createPost } from '../features/posts/postsSlice';
import { useSelector } from 'react-redux';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title !== '' && content !== '') {
        dispatch(createPost({ title, content, role: user.role, userId:user.id}));
        setTitle('');
        setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom: '2em'}}>
      <Typography variant="h4" gutterBottom>
        Создайте новый пост
      </Typography>
      <TextField
        label="Название поста"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Основная часть поста"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Создать пост
      </Button>
    </form>
  );
};

export default PostForm;
