import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg';


//ElevationScroll
function ElevationScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo:{
    height: '7em',
  }
}));

//Header
export default function Header(props){
  const classes = useStyles();

  return(
    <>
    <ElevationScroll>
    <AppBar position="fixed">
      <ToolBar disableGutters>
       <img src={logo} className={classes.logo} alt="company logo"/>
      </ToolBar>
    </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin} />
    </>
  );

}


