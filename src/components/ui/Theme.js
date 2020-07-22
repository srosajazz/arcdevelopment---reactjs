import { createMuiTheme } from '@material-ui/core/styles';

//var() -> Custom Properties (Variables)
const headBlue = '#0B72B9';
const headOrange = '#FFBA60';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${headBlue}`,
      orange: `${headOrange}`,
    },
    primary: {
      main: `${headBlue}`,
    },
    secondary: {
      main: `${headOrange}`,
    },
  },

  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },

    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: '#fff',
    },
  },
});
