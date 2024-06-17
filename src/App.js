import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector, useDispatch } from "react-redux";
import { authMe } from "./features/auth/authSlice";
import { useEffect } from "react";
import { PUBLIC_PATHS, PRIVATE_PATHS } from "./router/routes";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



function App() {

 
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => Boolean(state.auth.user));
  
  useEffect(() => {
    dispatch(authMe())
  }, [dispatch])


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      
      <div className="App">
        
          {isAuth ? 
         
           <Routes>
            <Route path="/*" element={<Layout />}>
              <Route path={PRIVATE_PATHS.home.path} element={PRIVATE_PATHS.home.element} />
              <Route path={PRIVATE_PATHS.posts.path} element={PRIVATE_PATHS.posts.element} />
              <Route path={PRIVATE_PATHS.courses.path} element={PRIVATE_PATHS.courses.element} />
              <Route path={PRIVATE_PATHS.about.path} element={PRIVATE_PATHS.about.element} />
              <Route path={PRIVATE_PATHS.students.path} element={PRIVATE_PATHS.students.element} />
              <Route path={PRIVATE_PATHS.support.path} element={PRIVATE_PATHS.support.element} />
              <Route path={PRIVATE_PATHS.modeling.path} element={PRIVATE_PATHS.modeling.element} />
              <Route path={PRIVATE_PATHS.onemodule.path} element={PRIVATE_PATHS.onemodule.element} />
              <Route path={PRIVATE_PATHS.twomodule.path} element={PRIVATE_PATHS.twomodule.element} />
              <Route path={PRIVATE_PATHS.freemodule.path} element={PRIVATE_PATHS.freemodule.element} />
              <Route path={PRIVATE_PATHS.fourmodule.path} element={PRIVATE_PATHS.fourmodule.element} />
              <Route path={PRIVATE_PATHS.fivemodule.path} element={PRIVATE_PATHS.fivemodule.element} />
              <Route path={PRIVATE_PATHS.sixmodule.path} element={PRIVATE_PATHS.sixmodule.element} />
              <Route path={PRIVATE_PATHS.sevenmodule.path} element={PRIVATE_PATHS.sevenmodule.element} />
              <Route path={PRIVATE_PATHS.eightmodule.path} element={PRIVATE_PATHS.eightmodule.element} />
              <Route path={PRIVATE_PATHS.ninemodule.path} element={PRIVATE_PATHS.ninemodule.element} />
              <Route path={PRIVATE_PATHS.tenmodule.path} element={PRIVATE_PATHS.tenmodule.element} />
              <Route path={PRIVATE_PATHS.tenmodule.path} element={PRIVATE_PATHS.tenmodule.element} />
              <Route path={PRIVATE_PATHS.tenmodule.path} element={PRIVATE_PATHS.tenmodule.element} />
              <Route path={PRIVATE_PATHS.elevenmodule.path} element={PRIVATE_PATHS.elevenmodule.element} />
              <Route path={PRIVATE_PATHS.twelvemodule.path} element={PRIVATE_PATHS.twelvemodule.element} />
              <Route path={PRIVATE_PATHS.thirteenmodule.path} element={PRIVATE_PATHS.thirteenmodule.element} />
              <Route path={PRIVATE_PATHS.fourteenmodule.path} element={PRIVATE_PATHS.fourteenmodule.element} />
              <Route path={PRIVATE_PATHS.fifteenmodule.path} element={PRIVATE_PATHS.fifteenmodule.element} />
              <Route path={PRIVATE_PATHS.sixteenmodule.path} element={PRIVATE_PATHS.sixteenmodule.element} />
              <Route path={PRIVATE_PATHS.seventeenmodule.path} element={PRIVATE_PATHS.seventeenmodule.element} />
              <Route path={PRIVATE_PATHS.testonemodule.path} element={PRIVATE_PATHS.testonemodule.element} />
              <Route path={PRIVATE_PATHS.lazer.path} element={PRIVATE_PATHS.lazer.element} />
              <Route path={PRIVATE_PATHS.onelazer.path} element={PRIVATE_PATHS.onelazer.element} />
              <Route path={PRIVATE_PATHS.twolazer.path} element={PRIVATE_PATHS.twolazer.element} />
              <Route path={PRIVATE_PATHS.freelazer.path} element={PRIVATE_PATHS.freelazer.element} />
              <Route path={PRIVATE_PATHS.fourlazer.path} element={PRIVATE_PATHS.fourlazer.element} />
              <Route path={PRIVATE_PATHS.fivelazer.path} element={PRIVATE_PATHS.fivelazer.element} />
              <Route path={PRIVATE_PATHS.sixlazer.path} element={PRIVATE_PATHS.sixlazer.element} />
              <Route path={PRIVATE_PATHS.sevenlazer.path} element={PRIVATE_PATHS.sevenlazer.element} />
              <Route path={PRIVATE_PATHS.testlazer.path} element={PRIVATE_PATHS.testlazer.element} />
              <Route path={PRIVATE_PATHS.print.path} element={PRIVATE_PATHS.print.element} />
              <Route path={PRIVATE_PATHS.oneprint.path} element={PRIVATE_PATHS.oneprint.element} />
              <Route path={PRIVATE_PATHS.twoprint.path} element={PRIVATE_PATHS.twoprint.element} />
              <Route path={PRIVATE_PATHS.freeprint.path} element={PRIVATE_PATHS.freeprint.element} />
              <Route path={PRIVATE_PATHS.fourprint.path} element={PRIVATE_PATHS.fourprint.element} />
              <Route path={PRIVATE_PATHS.fiveprint.path} element={PRIVATE_PATHS.fiveprint.element} />
              <Route path={PRIVATE_PATHS.sixprint.path} element={PRIVATE_PATHS.sixprint.element} />
              <Route path={PRIVATE_PATHS.sevenprint.path} element={PRIVATE_PATHS.sevenprint.element} />
              <Route path={PRIVATE_PATHS.eightprint.path} element={PRIVATE_PATHS.eightprint.element} />
              <Route path={PRIVATE_PATHS.nineprint.path} element={PRIVATE_PATHS.nineprint.element} />
              <Route path={PRIVATE_PATHS.tenprint.path} element={PRIVATE_PATHS.tenprint.element} />
              <Route path={PRIVATE_PATHS.elevenprint.path} element={PRIVATE_PATHS.elevenprint.element} />
              <Route path={PRIVATE_PATHS.twelveprint.path} element={PRIVATE_PATHS.twelveprint.element} />
              <Route path={PRIVATE_PATHS.firteenprint.path} element={PRIVATE_PATHS.firteenprint.element} />
              <Route path={PRIVATE_PATHS.testprint.path} element={PRIVATE_PATHS.testprint.element} />
            </Route>
          </Routes>
         
          : 
          
            <Routes>
              <Route path={PUBLIC_PATHS.home.path} element={PUBLIC_PATHS.home.element} />
              <Route path={PUBLIC_PATHS.login.path} element={PUBLIC_PATHS.login.element} />
            </Routes>
          
          }
        
      </div>
    </ThemeProvider>
  );
}

export default App;
