import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';


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


//STYLES
const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo:{
    height: '7em',
  },

  tabContainer: {
    marginLeft: "auto",
  },
  tab:{
    ...theme.mixins.tab,
    minWidth: 10, //space between tab
    marginLeft:"25px",
  },
  button:{
    ...theme.typography.estimate,
    borderRadius:"50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
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
       <img src={logo} className={classes.logo} alt="company logo"
       />
       <Tabs className={classes.tabContainer}>
         <Tab className={classes.tab}label="Home"  />
         <Tab className={classes.tab}label="Services"  />
         <Tab className={classes.tab}label="Appoitment"  />
         <Tab className={classes.tab}label="About Us"  />
         <Tab className={classes.tab}label="Contact Us"  />
       </Tabs>
       <Button variant="contained" color="secondary" className={classes.button}>
         Free Estimate
       </Button>
      </ToolBar>
    </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin} />
    </>
  );

}


