import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#232F34',
      light: '#344955',
    },
    secondary : {
      main: '#F9AA33',
    },
  },
  typography: {
    fontFamily: '"Montserrat", Open Sans',
    fontWeightLight: 200,
  }
})
