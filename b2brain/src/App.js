import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import Routes from './Routes';
export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState('light');
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider>    
  <ThemeProvider theme={themeStyle}>
    <GlobalStyle />
    <>
      <Layout>
        <Routes />
      </Layout>
    </>
  </ThemeProvider>
  </ThemeContext.Provider>
)}

export default App;
