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
import { motion } from 'framer-motion'; // Импортируем framer-motion


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const modules = [
  {
    id: 1,
    title: 'ОСНОВЫ 3D ГРАФИКИ. Интерфейс Blender',
    desc: 'Основные компоненты интерфейса Blender: виды, панели, меню',
    to: 'onemodule'
  },
  {
    id: 2,
    title: 'Настройка Blender',
    desc: 'Персонализация интерфейса: настройка панелей и окон',
    to: 'twomodule'
  },
  {
    id: 3,
    title: 'Управление сценой в Blender',
    desc: 'Создание и управление сценами',
    to: 'freemodule'
  },
  {
    id: 4,
    title: 'Базовые трансформации',
    desc: 'Перемещение, вращение и масштабирование объектов в пространстве',
    to: 'fourmodule'
  },
  {
    id: 5,
    title: 'Объектный режим и режим редактирования',
    desc: 'Операции с объектами: выделение, перемещение, копирование',
    to: 'fivemodule'
  },
  {
    id: 6,
    title: 'Mesh-объекты',
    desc: 'Создание и редактирование базовых геометрических форм',
    to: 'sixmodule'
  },
  {
    id: 7,
    title: 'Extrude – экструдирование',
    desc: 'Применение инструмента экструдирования для создания объемных форм',
    to: 'sevenmodule'
  },
  {
    id: 8,
    title: 'Subdivide – подразделение',
    desc: 'Теория: Основы систем частиц и симуляций в Blender.',
    to: 'eightmodule'
  },
  {
    id: 9,
    title: 'Модификатор Boolean',
    desc: 'Применение модификатора Boolean для создания сложных форм путем объединения объектов',
    to: 'ninemodule'
  },
  {
    id: 10,
    title: 'Модификатор Mirror',
    desc: 'Создание симметричных объектов с помощью модификатора Mirror',
    to: 'tenmodule'
  },
  {
    id: 11,
    title: 'Сглаживание – Smooth',
    desc: 'Применение сглаживания к геометрии объектов для получения более плавных форм',
    to: 'elevenmodule'
  },
  {
    id: 12,
    title: 'Материалы',
    desc: 'Создание и применение материалов к объектам',
    to: 'twelvemodule'
  },
  {
    id: 13,
    title: 'Текстуры',
    desc: 'Импорт и применение текстур к объектам',
    to: 'thirteenmodule'
  },
  {
    id: 14,
    title: 'Введение в анимацию в Blender',
    desc: 'Создание базовых анимаций объектов и камеры',
    to: 'fourteenmodule'
  },
  {
    id: 15,
    title: 'Введение в физику в Blender',
    desc: 'Настройка физических свойств объектов',
    to: 'fifteenmodule'
  },
  {
    id: 16,
    title: 'Моделирование текста:',
    desc: 'Создание и редактирование текстовых объектов',
    to: 'sixteenmodule'
  },
  {
    id: 17,
    title: 'Кривые Безье',
    desc: 'Использование кривых Безье для создания сложных форм и путей движения',
    to: 'seventeenmodule'
  },
  {
    id: 18,
    title: 'Тест по пройденному материалу',
    desc: 'Пройди тест, чтобы получить очки',
    to: 'testonemodule'
  },
]

const Modeling = () => {


  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);


  return (
    <div>
      <Link to={'/courses'}>
        <Button variant="outlined">Вернуться назад</Button>
      </Link>
      <div>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Модули
          </Typography>
          <Typography sx={{ mb: 2 }} variant="p" component="div">
            По завершении курса вы будете иметь базовые навыки 3D-моделирования в Blender, сможете создавать простые и сложные объекты, работать с материалами и текстурами, освещать сцены и создавать анимации. 
            Полученные знания и навыки могут быть полезны для дальнейшего изучения 3D-графики, дизайна и анимации.
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

export default Modeling