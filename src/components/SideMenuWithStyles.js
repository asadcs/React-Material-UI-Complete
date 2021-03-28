import React from 'react'
import {makeStyles,withStyles} from '@material-ui/core'
const useStyles={
  sidemenu: { height: '100%', /* Full-height: remove this if you want "auto" height */
    width: '160px', /* Set the width of the sidebar */
    position: 'fixed', /* Fixed Sidebar (stay in place on scroll) */
    zIndex: '1', /* Stay on top */
    top: '0', /* Stay at the top */
    left: '0',
    backgroundColor: '#3c44b1', /* Black */
    overflowX: 'hidden', /* Disable horizontal scroll */
    paddingTop: '20px'}
  }
 
const SideMenuWithStyles=(props)=>{
  
  const {classes}=props
    return (
        
        <div className={classes.sidemenu}>
            Side Menu
        </div>
    )
}
export default withStyles(useStyles)(SideMenuWithStyles)