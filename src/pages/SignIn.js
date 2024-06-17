import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const defaultTheme = createTheme();

export default function SignIn() {
    const [role, setRole] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => console.log(state.auth.user))    
    const [count, setCount] = useState(0);
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const info = await dispatch(login({
            role, 
            email: data.get('email'), 
            password: data.get('password')
        }))
        setCount(2)

        if(!info.payload) {
            return alert('Не удалось зарегестрироваться');
        }else if('token' in info.payload) {
            window.localStorage.setItem('token', info.payload.token);
            navigate('/home')
        } 
    };

    const handleChange = (event) => {
        setRole(event.target.value);
    };

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             <FormControl  fullWidth sx={{  mt: 3, mb: 2 }}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
              <Link to="/">
                  Нет аккаунта? Зарегестрироваться
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}