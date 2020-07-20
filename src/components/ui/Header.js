import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


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

//Header
export default function Header(props){
  return(
    <ElevationScroll>
    <AppBar position="fixed">
      <ToolBar>
        Sergio Devlopment
      </ToolBar>
    </AppBar>
    </ElevationScroll>
  );

}


