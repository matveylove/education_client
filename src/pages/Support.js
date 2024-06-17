import React from 'react';
import { Container, Typography, Grid, IconButton, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';

const Support = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Техническая поддержка
        </Typography>
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
          <Typography variant="body1" paragraph>
            Наши специалисты готовы помочь вам с любыми вопросами, возникающими в процессе использования наших услуг.
            Мы стремимся обеспечить нашим клиентам максимальный уровень удовлетворенности, поэтому предоставляем оперативную
            и качественную техническую поддержку.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Как связаться с нами?
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton color="primary" aria-label="call">
                  <CallIcon />
                </IconButton>
              </motion.div>
            </Grid>
            <Grid item>
              <Typography variant="body1">+7 (923) 616-23-48</Typography>
            </Grid>
            <Grid item>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton color="primary" aria-label="email">
                  <EmailIcon />
                </IconButton>
              </motion.div>
            </Grid>
            <Grid item>
              <Typography variant="body1">support@example.com</Typography>
            </Grid>
            <Grid item>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton color="primary" aria-label="chat">
                  <ChatIcon />
                </IconButton>
              </motion.div>
            </Grid>
            <Grid item>
              <Typography variant="body1">Онлайн-чат</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Typography variant="h4" gutterBottom>
          Что мы предлагаем?
        </Typography>
        <Typography variant="body1" paragraph>
          Наша команда технической поддержки обеспечивает помощь в следующих вопросах:
        </Typography>
        <ul>
          <li>Решение проблем с доступом к аккаунту или курсам.</li>
          <li>Помощь в использовании функционала нашего приложения.</li>
          <li>Технические консультации по работе с материалами и курсами.</li>
          <li>Инструкции по устранению неполадок и ошибок.</li>
        </ul>
        <Typography variant="body1" paragraph>
          Не стесняйтесь обращаться к нам по любым техническим вопросам или проблемам. Мы готовы помочь вам сделать ваше обучение максимально комфортным и продуктивным.
        </Typography>
      </motion.div>
    </Container>
  );
};

export default Support;
