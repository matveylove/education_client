import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

function Comments({ comments }) {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const response = await axios.get(`/posts/${postId}/comments`);
//         setComments(response.data);
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     };

//     fetchComments();
//   }, [postId]);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Комментарии
      </Typography>
      <List>
        {comments.map(comment => (
          <ListItem key={comment.id}>
            <ListItemText primary={comment.content} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Comments;
