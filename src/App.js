import React from 'react';
import LoginLayout from './components/LoginLayout';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {palette} from './theme'


const theme = createMuiTheme({
  palette: palette
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <LoginLayout />

    </ThemeProvider>
  )
}

export default App
