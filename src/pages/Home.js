import React from 'react';
import { Typography, Box, Paper, Container, Divider, Grid, Avatar, IconButton, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Chat from '../components/Chat';

const Home = () => {




  return (
    <Container maxWidth="md" sx={{ marginTop: 0 }}>
      {/* <Chat/> */}
      <Paper elevation={6} sx={{
        padding: 4,
        borderRadius: 5,
        backgroundColor: '#1e1e1e',
        color: '#e0e0e0',
        boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 15px 25px rgba(0,0,0,0.6)',
        }
      }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Avatar sx={{ bgcolor: 'primary.main', width: 72, height: 72 }}>
                <SchoolIcon fontSize="large" />
              </Avatar>
            </motion.div>
          </Grid>
          <Grid item xs>
            <Typography variant="h3" component="h1" gutterBottom>
              Добро пожаловать в наше приложение!
            </Typography>
            <Divider sx={{ marginY: 2, borderColor: 'primary.main' }} />
            <Typography variant="body1" paragraph>
              Дорогие учителя и школьники,
            </Typography>
            <Typography variant="body1" paragraph>
              Мы рады приветствовать вас в нашем уникальном образовательном пространстве, где каждый из вас сможет не только учиться, но и делиться своими знаниями и опытом.
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Для школьников:
            </Typography>
            <Typography variant="body1" paragraph>
              Теперь у вас есть возможность проходить курсы по аддитивным и наукоемким технологиям, которые помогут вам овладеть передовыми знаниями и навыками. Каждый курс разбит на модули, чтобы сделать процесс обучения более удобным и понятным. В конце каждого курса вас ждет тест, который позволит проверить ваши знания. Успешно пройдя тест, вы получите бонусные очки, которые сможете использовать для приобретения других интересных курсов на нашем сайте.
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Для учителей:
            </Typography>
            <Typography variant="body1" paragraph>
              Наше приложение предоставляет вам уникальные инструменты для отслеживания успеваемости ваших учеников. Вы сможете видеть их прогресс в режиме реального времени, что позволит вам вовремя корректировать учебный процесс и оказывать необходимую поддержку.
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Для всех:
            </Typography>
            <Typography variant="body1" paragraph>
              В нашем сообществе учителя и ученики могут оставлять посты, чтобы делиться своими вопросами и находками по курсам. Это поможет вам найти ответы на непонятные моменты, получить помощь от коллег и сверстников, а также обогатить ваше обучение.
            </Typography>
            <Typography variant="body1" paragraph>
              Мы верим, что наше приложение станет для вас не только источником знаний, но и платформой для плодотворного общения и совместного роста.
            </Typography>
            <Typography variant="body1" paragraph>
              С уважением,
            </Typography>
            <Typography variant="body1" paragraph>
              Команда разработчиков приложения
            </Typography>
           <Link to={'/courses'}>
           <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ marginTop: 3 }}
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -10, 0], transition: { duration: 0.6, repeat: Infinity } }}
            >
              Начать работу
            </Button>
           </Link>
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 2, borderColor: 'primary.main' }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton color="primary" sx={{ fontSize: 40 }}>
                <StarIcon fontSize="inherit" />
              </IconButton>
            </motion.div>
            <Typography variant="caption" display="block" align="center">
              Бонусные очки
            </Typography>
          </Grid>
          <Grid item>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              >
              <IconButton color="primary" sx={{ fontSize: 40 }}>
                <ChatIcon fontSize="inherit" />
              </IconButton>
            </motion.div>
            <Typography variant="caption" display="block" align="center">
              Общение
            </Typography>
          </Grid>
          <Grid item>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton color="primary" sx={{ fontSize: 40 }}>
                <EmojiEventsIcon fontSize="inherit" />
              </IconButton>
            </motion.div>
            <Typography variant="caption" display="block" align="center">
              Тесты и модули
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;

