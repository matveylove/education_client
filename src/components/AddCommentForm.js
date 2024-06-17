import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createComment } from '../features/posts/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddCommentForm = ({postId}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
    const [content, setContent] = useState('');
    
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment({
        postId, 
        content 
    }))
    setContent('');
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }} onSubmit={handleSubmit}>
      <TextField
        style={{ marginBottom: '16px' }}
        label="Комментарий"
        variant="outlined"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Добавить комментарий
      </Button>
    </form>
  );
};

export default AddCommentForm;
