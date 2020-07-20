import { createMuiTheme } from '@material-ui/core/styles';

//var() -> Custom Properties (Variables)
const headBlue = "#0B72B9"
const headOrange = "#FFBA60"

export default createMuiTheme({
  palette: {
    common: {
      blue: `${headBlue}`,     
      orange: `${headOrange}`     
    },
    primary: {
      main: `${headBlue}`   
    },
    secondary: {
      main: `${headOrange}`   
    
    }
  },

  typography: {
    h3: {
      fontWeight: 300
    }
  }
});