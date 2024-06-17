// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchPosts } from '../features/posts/postsSlice';
// import { Typography, CircularProgress, Card, CardContent, CardActions, Button } from '@mui/material';
// import PostForm from '../components/PostForm';
// import AddCommentForm from '../components/AddCommentForm';
// import Comments from '../components/Comments';
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

// const PostList = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const { posts, loading, error } = useSelector((state) => state.posts);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   if (error) {
//     return <Typography variant="body1" color="error">{error}</Typography>;
//   }

//   return (
//     <div>
//       <div style={{ width: '70%' }}>
//         <PostForm />
//         <Typography variant="h4" component="h2" sx={{ mb: '1em' }}>
//           Посты
//         </Typography>
//         {posts && posts.length > 0 ? (
//           posts.map((post) => (
//             <Card key={post.id} variant="outlined" sx={{ marginBottom: '30px' }}>
//               <CardContent>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'space-between', width: '100%', marginBottom:'1em'}}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
//                     <AccessibilityNewIcon />
//                     <Typography variant="h6" component="h2">
//                       {post.student ? post.student.firstName : post.teacher.firstName}
//                     </Typography>
//                     <Typography variant="h6" component="h2">
//                       {post.student ? post.student.lastName : post.teacher.lastName}
//                     </Typography>
//                   </div>
//                   <Typography variant="h5" component="h2">
//                     {post.student ? 'Студент' : 'Учитель'}
//                   </Typography>
//                 </div>
//                 <Typography variant="h6" component="h2" sx={{mb:'0.5em'}}>
//                   {post.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {post.content}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Like</Button>
//                 <Button size="small">Comments</Button>
//               </CardActions>
//               <AddCommentForm postId={post.id} />
//               {/* <Comments postId={post.id} /> */}
//             </Card>
//           ))
//         ) : (
//           <Typography variant="body1">Нет постов для отображения</Typography>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PostList;



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import { Typography, CircularProgress, Card, CardContent, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import PostForm from '../components/PostForm';
import AddCommentForm from '../components/AddCommentForm';
import Comments from '../components/Comments';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const PostList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1" color="error">{error}</Typography>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div style={{ width: '70%' }}>
        <PostForm />
        <Typography variant="h4" component="h2" sx={{ mb: '1em' }}>
          Посты
        </Typography>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Card
              key={post.id}
              variant="outlined"
              sx={{ marginBottom: '30px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <CardContent>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'space-between', width: '100%', marginBottom: '1em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <AccessibilityNewIcon />
                      <Typography variant="h6" component="h2">
                        {post.student ? post.student.firstName : post.teacher.firstName}
                      </Typography>
                      <Typography variant="h6" component="h2">
                        {post.student ? post.student.lastName : post.teacher.lastName}
                      </Typography>
                    </div>
                    <Typography variant="h5" component="h2">
                      {post.student ? 'Студент' : 'Учитель'}
                    </Typography>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h6" component="h2" sx={{ mb: '0.5em' }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.content}
                  </Typography>
                </motion.div>
              </CardContent>
              <CardActions>
                <Button size="small">Like</Button>
                <Button size="small">Comments</Button>
              </CardActions>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AddCommentForm postId={post.id} />
                {/* <Comments postId={post.id} /> */}
              </motion.div>
            </Card>
          ))
        ) : (
          <Typography variant="body1">Нет постов для отображения</Typography>
        )}
      </div>
    </motion.div>
  );
};

export default PostList;
