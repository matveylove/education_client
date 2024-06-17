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
    question: 'Какой метод 3D-печати используется в технологии FDM?',
    options: ['Лазерная плавка', 'Послойное наплавление', 'Фотополимеризация', 'Стереолитография'],
    correct: 'Послойное наплавление',
  },
  {
    question: 'Какая температура обычно требуется для печати PLA пластиком?',
    options: ['180-200°C', '200-220°C', '220-240°C', '240-260°C'],
    correct: '200-220°C',
  },
  {
    question: 'Какой материал часто используется для поддержки печати в FDM?',
    options: ['PLA', 'ABS', 'HIPS', 'PETG'],
    correct: 'HIPS',
  },
  {
    question: 'Что такое "слой" в контексте 3D-печати?',
    options: ['Толщина объекта', 'Ширина печати', 'Высота каждой напечатанной полосы', 'Длина печатного объекта'],
    correct: 'Высота каждой напечатанной полосы',
  },
  {
    question: 'Какая проблема может возникнуть при слишком высокой температуре печати?',
    options: ['Отслоение', 'Неправильная адгезия', 'Перегрев', 'Засорение сопла'],
    correct: 'Перегрев',
  },
  {
    question: 'Какое ПО часто используется для нарезки 3D-моделей перед печатью?',
    options: ['Blender', 'Fusion 360', 'Cura', 'Tinkercad'],
    correct: 'Cura',
  },
  {
    question: 'Что означает термин "экструдер" в 3D-печати?',
    options: ['Часть принтера, которая движет платформу', 'Часть принтера, которая подает и плавит пластик', 'Программное обеспечение для нарезки', 'Метод охлаждения печати'],
    correct: 'Часть принтера, которая подает и плавит пластик',
  },
  {
    question: 'Как можно предотвратить деформацию при печати ABS пластиком?',
    options: ['Использовать платформу с подогревом', 'Печать при низкой скорости', 'Печать при низкой температуре', 'Использовать охлаждение'],
    correct: 'Использовать платформу с подогревом',
  },
  {
    question: 'Что такое "риббон" в контексте 3D-печати?',
    options: ['Плоская полоска материала', 'Программный интерфейс', 'Слой поддержки', 'Тип экструзии'],
    correct: 'Плоская полоска материала',
  },
  {
    question: 'Какое действие выполняет горячая клавиша "Shift + Z" в большинстве программ для 3D-печати?',
    options: ['Отмена действия', 'Поворот модели', 'Печать', 'Снятие видимости слоя'],
    correct: 'Снятие видимости слоя',
  },
  {
    question: 'Какая настройка влияет на гладкость поверхности печатного объекта?',
    options: ['Температура сопла', 'Скорость печати', 'Толщина слоя', 'Тип материала'],
    correct: 'Толщина слоя',
  },
  {
    question: 'Что такое "ретракция" в контексте 3D-печати?',
    options: ['Процесс охлаждения слоя', 'Процесс плавления материала', 'Процесс вытягивания нити назад для предотвращения подтеков', 'Процесс наложения слоев'],
    correct: 'Процесс вытягивания нити назад для предотвращения подтеков',
  },
  {
    question: 'Какой тип 3D-принтера использует лазер для отверждения фотополимера?',
    options: ['FDM', 'SLA', 'SLS', 'DLP'],
    correct: 'SLA',
  },
  {
    question: 'Что необходимо сделать перед началом печати на новом 3D-принтере?',
    options: ['Загрузить модель', 'Настроить экструдер', 'Сделать калибровку платформы', 'Выбрать цвет материала'],
    correct: 'Сделать калибровку платформы',
  },
  {
    question: 'Какое свойство важно для материала, используемого в печати поддержек?',
    options: ['Высокая плотность', 'Низкая температура плавления', 'Легкость в удалении', 'Высокая прочность'],
    correct: 'Легкость в удалении',
  }
];


const TestPrint = () => {
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
    

   if(correctAnswers >= 12 && !user.coursesNames.includes('3D-печать')) {
    try {
      const response = await axios.put(`/api/student/${user.id}`, {
      coursesNames: '3D-печать,',
      bonusPoints: 50,
      coursesCompleted: 1,
      role: user.role
    });
    displath(addCourse({
      coursesNames: '3D-печать,',
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
        score >= 12 ? (
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

export default TestPrint;
