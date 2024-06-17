import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder'
import { motion } from 'framer-motion'; // Импортируем framer-motion

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const modules = [
  {
    id: 1,
    title: 'Модуль 1: Введение в лазерную гравировку',
    desc: 'Теория: Основы лазерной гравировки: что это такое, где применяется и какие есть виды лазеров.',
    to: 'onelazer'
  },
  {
    id: 2,
    title: 'Модуль 2: Принцип работы лазерных гравировальных машин',
    desc: 'Теория: Введение в векторную и растровую графику, основы программного обеспечения для создания дизайнов (например, CorelDRAW или Adobe Illustrator).',
    to: 'twolazer'
  },
  {
    id: 3,
    title: 'Модуль 3: Материалы для лазерной гравировки',
    desc: 'Теория: Разнообразие материалов, подходящих для лазерной гравировки: дерево, металл, пластик, стекло и кожа.',
    to: 'freelazer'
  },
  {
    id: 4,
    title: 'Модуль 4: Программное обеспечение для лазерной гравировки',
    desc: 'Теория: Влияние мощности, скорости и частоты лазера на качество гравировки.',
    to: 'fourlazer'
  },
  {
    id: 5,
    title: 'Модуль 5: Подготовка и настройка лазерной гравировальной машины',
    desc: 'Теория: Принципы создания сложных и детализированных дизайнов для гравировки.',
    to: 'fivelazer'
  },
  {
    id: 6,
    title: 'Модуль 6: Процесс гравировки',
    desc: 'Теория: Различные техники лазерной гравировки: глубокая гравировка, гравировка по краске, многослойная гравировка.',
    to: 'sixlazer'
  },
  {
    id: 7,
    title: 'Модуль 7: Обслуживание и уход за лазерной гравировальной машиной',
    desc: 'Теория: Использование лазерной гравировки в сочетании с другими техниками (например, резка, раскраска).',
    to: 'sevenlazer'
  },
  {
    id: 11,
    title: 'Тест по пройденному материалу',
    desc: 'Пройди тест, чтобы получить очки',
    to: 'testlazer'
  },
]

const Lazer = () => {


  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);


  return (
    <div>
        <Link to={'/courses'}><Button variant="outlined">Вернуться назад</Button></Link>
        <div>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2, }} variant="h6" component="div">
            Модули
          </Typography>
          <Typography sx={{  mb: 2, }} variant="p" component="div">
          По завершении курса вы будете иметь базовые и продвинутые навыки лазерной гравировки, сможете создавать и реализовывать собственные проекты, понимая тонкости работы с различными материалами и параметрами лазера. 
          Курс поможет развить творческое мышление и технические навыки, которые могут быть полезны для дальнейшего обучения и карьеры в сфере технологий и дизайна.
          </Typography>
          <Demo>
          <List dense={dense}>
              {modules.map((module) => (
                <motion.div // Оборачиваем каждый элемент в motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: -30 }} // Начальные стили
                  animate={{ opacity: 1, y: 0 }} // Анимация при появлении
                  transition={{ duration: 0.5 }} // Длительность анимации
                >
                  <ListItem style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', justifyContent: 'flex-start' }}>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={module.title}
                      secondary={module.desc}
                    />
                    <Link to={module.to}>
                      <Button variant="outlined">Перейти к модулю</Button>
                    </Link>
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Demo>
          
        </Grid>
        </div>
    </div>
  )
}

export default Lazer