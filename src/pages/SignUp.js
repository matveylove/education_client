import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getSchools } from '../features/school/schoolSlice';
import { register } from '../features/auth/authSlice';
// import { Navigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Получение всех школ
    useEffect(() => {
        dispatch(getSchools())
    }, [dispatch]);

    const schools = useSelector((state) => state.schools.schools) 

    const [role, setRole] = useState('');
    const [school, setSchool] = useState('');
    const [age, setAge] = useState(0);

    // if(isAuth) {
    //     history.push('home')
    // }

    const handleAge = (event) => {
        setAge(event.target.value);
    };
    const handleSchool = (event) => {
        setSchool(event.target.value);
    };
    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const info = await dispatch(register({
            role, 
            schoolId:school, 
            age, 
            email: data.get('email'), 
            password: data.get('password'), 
            lastName: data.get('lastName'), 
            firstName: data.get('firstName')
        }))
        if(!info.payload) {
            return alert('Не удалось зарегестрироваться');
        }else if('token' in info.payload) {
            window.localStorage.setItem('token', info.payload.token);
            navigate('/home')
        } 
    };
    
    const ages = [ `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`, `43`, `44`, `45`, `46`, `47`, `48`, `49`, `50`, `51`, `52`, `53`, `54`, `55`, `56`, `57`, `58`, `59`, `60`, `61`, `62`, `63`, `64`, `65`, `66`, `67`, `68`, `69`, `70`, `71`, `72`, `73`, `74`, `75`, `76`, `77`, `78`, `79`, `80`, `81`, `82`, `83`, `84`, `85`, `86`, `87`, `88`, `89`, `90`, `91`, `92`, `93`, `94`, `95`, `96`, `97`, `98`, `99`, `100`]

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Имя"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Фамилия"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <FormControl  fullWidth sx={{ml:2,  mt: 3, mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Возраст</InputLabel>
                <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Возраст"
                    onChange={handleAge}
                >
                {
                    ages.map((age) => <MenuItem key={age} value={age}>{age}</MenuItem>)
                }
                </Select>
            </FormControl>
              <FormControl  fullWidth sx={{ml:2,  mt: 3, mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Роль</InputLabel>
                <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Роль"
                    onChange={handleChange}
                >
                <MenuItem value={'STUDENT'}>Ученик</MenuItem>
                <MenuItem value={'TEACHER'}>Учитель</MenuItem>
                </Select>
            </FormControl>
            <FormControl  fullWidth sx={{ml:2,  mt: 3, mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Школа</InputLabel>
                <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={school}
                    label="Школа"
                    onChange={handleSchool}
                >
                {
                    schools === null ? '' : schools.map((school) => <MenuItem key={school.id} value={school.id}>{school.title}</MenuItem>)
                }
                </Select>
            </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  Уже есть аккакнут? Войти
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}