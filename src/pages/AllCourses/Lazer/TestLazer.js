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
    question: 'Что такое лазерная гравировка?',
    options: [
      'Процесс создания графических изображений с помощью лазерного луча.',
      'Способ создания музыкальных звуков при помощи лазерного луча.',
      'Метод создания 3D-моделей при помощи лазерного сканирования.',
      'Техника использования лазерного луча для сварки металлов.'
    ],
    correct: 'Процесс создания графических изображений с помощью лазерного луча.'
  },
  {
    question: 'Какие параметры лазера являются ключевыми при лазерной гравировке?',
    options: [
      'Цвет и форма лазерного луча.',
      'Ширина и длина лазерного луча.',
      'Скорость, мощность и частота лазера.',
      'Температура и влажность в помещении.'
    ],
    correct: 'Скорость, мощность и частота лазера.'
  },
  {
    question: 'Какие материалы могут быть использованы для лазерной гравировки?',
    options: [
      'Только дерево.',
      'Только стекло.',
      'Различные материалы, такие как дерево, металл, пластик и стекло.',
      'Только текстиль.'
    ],
    correct: 'Различные материалы, такие как дерево, металл, пластик и стекло.'
  },
  {
    question: 'Что представляет собой частота лазера?',
    options: [
      'Количество импульсов лазера в единицу времени.',
      'Длина волны лазерного луча.',
      'Скорость перемещения лазерного луча.',
      'Энергия, передаваемая лазером на материал.'
    ],
    correct: 'Количество импульсов лазера в единицу времени.'
  },
  {
    question: 'Какие меры безопасности необходимо соблюдать при работе с лазерной гравировкой?',
    options: [
      'Носить защитные очки и перчатки.',
      'Регулярно очищать лазерное оборудование.',
      'Проверять параметры лазера перед началом работы.',
      'Все вышеперечисленное.'
    ],
    correct: 'Все вышеперечисленное.'
  },
  {
    question: 'Какие параметры лазера важно настроить для каждого материала перед гравировкой?',
    options: [
      'Только скорость.',
      'Только мощность.',
      'Скорость и мощность.',
      'Только частоту.'
    ],
    correct: 'Скорость и мощность.'
  },
  {
    question: 'Каково влияние высокой скорости лазера на результат гравировки?',
    options: [
      'Увеличивает глубину гравировки.',
      'Повышает точность и четкость деталей.',
      'Увеличивает время гравировки.',
      'Снижает риск повреждения материала.'
    ],
    correct: 'Увеличивает время гравировки.'
  },
  {
    question: 'Что представляет собой мощность лазера в процессе гравировки?',
    options: [
      'Скорость передвижения лазерного луча по поверхности материала.',
      'Количество энергии, передаваемое лазером на материал.',
      'Частота колебаний лазерного луча.',
      'Глубина проникновения лазерного луча в материал.'
    ],
    correct: 'Количество энергии, передаваемое лазером на материал.'
  },
  {
    question: 'Какие могут быть последствия использования высокой мощности лазера?',
    options: [
      'Быстрое выполнение гравировки.',
      'Повышенный риск повреждения материала.',
      'Уменьшение времени гравировки.',
      'Увеличение точности и четкости деталей.'
    ],
    correct: 'Повышенный риск повреждения материала.'
  },
  {
    question: 'Какие параметры лазера влияют на качество гравировки?',
    options: [
      'Только мощность.',
      'Только частота.',
      'Только скорость.',
      'Скорость, мощность и частота.'
    ],
    correct: 'Скорость, мощность и частота.'
  }
];


const TestLazer = () => {
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
    

   if(correctAnswers >= 8 && !user.coursesNames.includes('Лазерная гравировка')) {
    try {
      const response = await axios.put(`/api/student/${user.id}`, {
      coursesNames: 'Лазерная гравировка,',
      bonusPoints: 50,
      coursesCompleted: 1,
      role: user.role
    });
    displath(addCourse({
      coursesNames: 'Лазерная гравировка,',
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
        score >= 8 ? (
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

export default TestLazer;
