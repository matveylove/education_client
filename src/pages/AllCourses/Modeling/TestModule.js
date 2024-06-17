import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button, Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import axios from '../../../axios';
import {useDispatch, useSelector } from 'react-redux';
import { addCourse } from '../../../features/auth/authSlice';

const questions = [
  {
    question: 'Какой горячей клавишей вызывается команда "Перемещение" в Blender?',
    options: ['G', 'R', 'S', 'E'],
    correct: 'G',
  },
  {
    question: 'Как добавить новый объект в сцену?',
    options: ['Shift + S', 'Shift + A', 'Ctrl + N', 'Alt + A'],
    correct: 'Shift + A',
  },
  {
    question: 'Какая клавиша переключает между режимами Object Mode и Edit Mode?',
    options: ['Tab', 'Ctrl + Tab', 'Alt + E', 'Shift + Tab'],
    correct: 'Tab',
  },
  {
    question: 'Какое расширение имеет файл проекта Blender?',
    options: ['.blend', '.obj', '.fbx', '.3ds'],
    correct: '.blend',
  },
  {
    question: 'Какой инструмент используется для вращения объекта?',
    options: ['G', 'R', 'S', 'T'],
    correct: 'R',
  },
  {
    question: 'Какую панель нужно использовать для настройки материалов объекта?',
    options: ['Outliner', 'Properties', 'Timeline', 'Info Bar'],
    correct: 'Properties',
  },
  {
    question: 'Какой тип примитивного объекта НЕ входит в стандартный набор Blender?',
    options: ['Куб', 'Сфера', 'Пирамида', 'Цилиндр'],
    correct: 'Пирамида',
  },
  {
    question: 'Какое действие выполняется клавишей S?',
    options: ['Перемещение', 'Вращение', 'Масштабирование', 'Экструдирование'],
    correct: 'Масштабирование',
  },
  {
    question: 'Какой модификатор используется для симметричного редактирования объекта?',
    options: ['Subdivision Surface', 'Boolean', 'Mirror', 'Solidify'],
    correct: 'Mirror',
  },
  {
    question: 'Что находится в верхней части экрана Blender?',
    options: ['Timeline', '3D Viewport', 'Главное меню', 'Properties'],
    correct: 'Главное меню',
  },
  {
    question: 'Каким сочетанием клавиш можно открыть меню рендеринга?',
    options: ['F10', 'F11', 'F12', 'Ctrl + F12'],
    correct: 'F12',
  },
  {
    question: 'Какой горячей клавишей активируется инструмент "Экструдирование"?',
    options: ['E', 'W', 'T', 'X'],
    correct: 'E',
  },
  {
    question: 'Какая вкладка панели Properties отвечает за рендеринг?',
    options: ['Modifiers', 'Material', 'Render', 'Texture'],
    correct: 'Render',
  },
  {
    question: 'Какое действие выполняет колесико мыши при прокрутке?',
    options: ['Поворот', 'Панорамирование', 'Масштабирование', 'Выбор'],
    correct: 'Масштабирование',
  },
  {
    question: 'Какой тип света не поддерживается в Blender?',
    options: ['Point Light', 'Sun Light', 'Box Light', 'Spot Light'],
    correct: 'Box Light',
  },
  {
    question: 'Какая панель позволяет работать с анимацией?',
    options: ['Properties', 'Timeline', 'Outliner', '3D Viewport'],
    correct: 'Timeline',
  },
  {
    question: 'Какую горячую клавишу нужно нажать, чтобы отменить последнее действие?',
    options: ['Ctrl + Z', 'Ctrl + X', 'Alt + Z', 'Shift + Z'],
    correct: 'Ctrl + Z',
  },
  {
    question: 'Какую вкладку нужно открыть в панели Properties, чтобы применить модификатор к объекту?',
    options: ['Modifiers', 'Material', 'Scene', 'World'],
    correct: 'Modifiers',
  },
  {
    question: 'Как переключиться в режим видоискателя камеры?',
    options: ['Numpad 0', 'Numpad 1', 'Numpad 7', 'Numpad 5'],
    correct: 'Numpad 0',
  },
  {
    question: 'Какой модификатор используется для создания плавных форм и сглаживания объектов?',
    options: ['Array', 'Subdivision Surface', 'Bevel', 'Decimate'],
    correct: 'Subdivision Surface',
  },
];

const Quiz = () => {
  const displath = useDispatch();
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const user = useSelector(state => state.auth.user);
  
  const handleChange = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleSubmit = async () => {
    let correctAnswers = 0;
    
    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        correctAnswers++;
      }
    });
    
    setScore(correctAnswers);
    

   if(correctAnswers >= 17 && !user.coursesNames.includes('Blnder')) {
    try {
      const response = await axios.put(`/api/student/${user.id}`, {
      coursesNames: 'Blender,',
      bonusPoints: 50,
      coursesCompleted: 1,
      role: user.role
    });
    displath(addCourse({
      coursesNames: 'Blender,',
      bonusPoints: 50,
      coursesCompleted: 1,
    }));
    console.log(response.data);
    } catch (error) {
    console.error('Ошибка при обновлении данных студента:', error);
    }
   }
  };

  

  return (
    <Container>
       <Link to={'/courses/modeling'}><Button variant="outlined">Вернуться назад</Button></Link>
      <Typography variant="h4" mt={2} gutterBottom>Тест по пройденному материлу</Typography>
      {questions.map((question, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h6">{question.question}</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              value={answers[index] || ''}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              {question.options.map((option, i) => (
                <FormControlLabel
                  key={i}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Узнать результат
      </Button>
      {score !== null && (
        score >= 17 ? (
          <Alert style={{ position: 'fixed', top: '0px', left: '20%', height: '100px', display: 'flex', alignItems: 'center', fontSize: '18px' }} icon={<CheckIcon fontSize="inherit" />} severity="success">
            Поздравляем! Вы прошли тест.
            Ваш результат: {score} / {questions.length}
          </Alert>
        ) : (
          <Alert style={{ position: 'fixed', top: '0px', left: '20%', height: '100px', display: 'flex', alignItems: 'center', fontSize: '18px' }} icon={<CheckIcon fontSize="inherit" />} severity="error">
            У вас не получилось пройти итоговый тест.
            Ваш результат: {score} / {questions.length}
          </Alert>
        )
      )}
    </Container>
  );
};

export default Quiz;
