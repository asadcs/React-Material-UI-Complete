import React,{useEffect,useState} from 'react'
import {Grid,makeStyles,TextField,form} from '@material-ui/core'
import {Form, useForm} from '../../components/useForm'



const initialFValues={
id:0,
fullName:'',
email:'',
mobile:'',
city:'',
gender:'male',
departmentID:'',
hireDate:new Date(),
isPermanent:false
}


export default function EmployeesForm() {
    const classes = useStyles()

   const {values,setValues,handleChangeInput} =useForm(initialFValues)



//useEffect(()=>{},[x])

    return (
        <div>
            <Form>
            
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    variant="outlined"
                    label="FullName"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChangeInput}
                    ></TextField>

<TextField
                    variant="outlined"
                    label="Email"
                    name="Email"
                    value={values.email}
                    ></TextField>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
            
            </Form>
        </div>
    )
}
