import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
// import Button from '@material-ui/core/Button';


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
  }
}));

//Header
export default function Header(props){
  const classes = useStyles();

  return(
    <>
    <ElevationScroll>
    <AppBar position="fixed">
      <ToolBar>
        <Typography variant="h3">
          Sergio Devlopment
        </Typography>
      </ToolBar>
    </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin} />
    </>
  );

}


