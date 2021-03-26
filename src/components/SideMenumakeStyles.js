import React from 'react'
import {makeStyles} from '@material-ui/core'

export default function SideMenumakeStyles() {
    const useStyles=makeStyles({
      sidemenu: { height: '100%', /* Full-height: remove this if you want "auto" height */
        width: '160px', /* Set the width of the sidebar */
        position: 'fixed', /* Fixed Sidebar (stay in place on scroll) */
        zIndex: '1', /* Stay on top */
        top: '0', /* Stay at the top */
        left: '0',
        backgroundColor: 'green', /* Black */
        overflowX: 'hidden', /* Disable horizontal scroll */
        paddingTop: '20px'}
      })
      const classes=useStyles();
    return (
        
        <div className={classes.sidemenu}>
            Side Menu
        </div>
    )
}
