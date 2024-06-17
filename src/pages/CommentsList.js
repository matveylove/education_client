import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, List, ListItem, ListItemText, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
  },
  inline: {
    display: 'inline',
  },
}));

const CommentsList = ({ comments }) => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      <List>
        {comments.map((comment, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                // primary={comment.content}
                primary={'sdffsdfdsfjdsfhgsdfsdgfhjgdsjfhgjsdfds'}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {/* {comment.author} */}
                      Kirill
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {index !== comments.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default CommentsList;
