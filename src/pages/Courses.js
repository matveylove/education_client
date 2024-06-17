
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grid,
} from '@mui/material';
import modelirovanie from '../static/modelirovanie.jpeg';
import lazer from '../static/lazer.jpeg';
import pechat from '../static/pechat.jpeg';

const Courses = () => {
  return (
    <>
      <h1>Курсы</h1>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Link to={'modeling'} style={{ textDecoration: 'none' }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={modelirovanie} alt="Blender" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      3D-моделирование
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Вы изучите основы 3D-моделирования с использованием бесплатного и мощного
                      программного обеспечения Blender. Курс поможет развить творческое
                      мышление, технические навыки и основы дизайна.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Перейти к курсу
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Link>
        </Grid>

        <Grid item xs={12} md={4}>
          <Link to={'lazer'} style={{ textDecoration: 'none' }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={lazer} alt="Lazer" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Лазерная гравировка
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Вы изучите основы лазерной гравировки, включая безопасное использование
                      оборудования, создание и подготовку дизайнов для гравировки, а также
                      применение различных техник на различных материалах. Курс направлен на
                      развитие технических навыков и творческого мышления.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Перейти к курсу
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Link>
        </Grid>

        <Grid item xs={12} md={4}>
          <Link to={'print'} style={{ textDecoration: 'none' }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={pechat} alt="Pechat" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      3D-печать
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      По завершении курса вы будете обладать базовыми и продвинутыми навыками
                      работы с 3D-принтером и программным обеспечением для 3D-моделирования,
                      сможете самостоятельно создавать и реализовывать свои проекты. Курс поможет
                      развить творческое мышление и технические навыки, которые могут быть
                      полезны для дальнейшего обучения и карьеры в сфере технологий и дизайна.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Перейти к курсу
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Link>
</Grid>
</Grid>
</>
);
};

export default Courses;


