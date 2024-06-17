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
import FolderIcon from '@mui/icons-material/Folder';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const modules = [
  {
    id: 1,
    title: 'Модуль 1: Знакомство с технологией',
    desc: 'Основные сведения о технологии 3D-печати.',
    to: 'oneprint'
  },
  {
    id: 2,
    title: 'Модуль 2: Технология FDM Часть 1',
    desc: 'Начальный уровень работы с технологией FDM.',
    to: 'twoprint'
  },
  {
    id: 3,
    title: 'Модуль 3: Технология FDM Часть 2',
    desc: 'Подготовка нового принтера к работе.',
    to: 'freeprint'
  },
  {
    id: 4,
    title: 'Модуль 4: Печать Часть 1',
    desc: 'Оптимальные режимы печати.',
    to: 'fourprint'
  },
  {
    id: 5,
    title: 'Модуль 5: Печать Часть 2',
    desc: 'Работа по повышению качества изделий.',
    to: 'fiveprint'
  },
  {
    id: 6,
    title: 'Модуль 6: Печать Часть 3',
    desc: 'Оптимизация времени печати.',
    to: 'sixprint'
  },
  {
    id: 7,
    title: 'Модуль 7: Постобработка',
    desc: 'Методы постобработки напечатанных изделий.',
    to: 'sevenprint'
  },
  {
    id: 8,
    title: 'Модуль 8: Эскизное моделирование',
    desc: 'Основы эскизного моделирования.',
    to: 'eightprint'
  },
  {
    id: 9,
    title: 'Модуль 9: Параметрическое моделирование',
    desc: 'Основы параметрического моделирования.',
    to: 'nineprint'
  },
  {
    id: 10,
    title: 'Модуль 10: Скульптурное моделирование',
    desc: 'Основы скульптурного моделирования.',
    to: 'tenprint'
  },
  {
    id: 11,
    title: 'Модуль 11: 3D-сканирование',
    desc: 'Методы и технологии 3D-сканирования.',
    to: 'elevenprint'
  },
  {
    id: 12,
    title: 'Модуль 12: Сервисное обслуживание 3D-принтера',
    desc: 'Основы сервисного обслуживания 3D-принтера.',
    to: 'twelveprint'
  },
  {
    id: 14,
    title: 'Тест по пройденному материалу',
    desc: 'Пройди тест, чтобы получить очки',
    to: 'testprint'
  },
];


const Print = () => {


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
          По завершении курса вы будете обладать базовыми и продвинутыми навыками работы с 3D-принтером и программным обеспечением для 3D-моделирования, сможете самостоятельно создавать и реализовывать свои проекты. Курс поможет развить творческое мышление и технические навыки, которые могут быть полезны для дальнейшего обучения и карьеры в сфере технологий и дизайна.
          </Typography>
          <Demo>
            <List dense={dense}>
              {
              modules.map((module) => (
                
                  <ListItem key={module.id} style={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', display:'flex', justifyContent:'flex-start'}}>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={module.title}
                      secondary={module.desc}
                    />
                    <Link to={module.to}><Button variant="outlined">Перейти к модулю</Button></Link>
                  </ListItem>
              ))
              }
            </List>
          </Demo>
          
        </Grid>
        </div>
    </div>
  )
}

export default Print