import React from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeesForm from './EmployeesForm'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { Paper,makeStyles } from '@material-ui/core';
// import {Grid,makeStyles,TextField,form} from '@material-ui/core'
const useStyles=makeStyles(theme=>({
    PageContent:{
    margin:theme.spacing(5),
    padding:theme.spacing(3)
    }
}))

export default function Employees() {
    const classes = useStyles()
    return (
        <div>
            <PageHeader
      title="New Leave"
      subtitle="Leave Form Design with validation"
      icon={<AccessibilityIcon fontSize="large"/>}>
      </PageHeader>
      <Paper className={classes.PageContent}>
           <EmployeesForm/> 
           </Paper>
        </div>
    )
}
