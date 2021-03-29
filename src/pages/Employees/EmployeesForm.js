import React,{useEffect,useState} from 'react'
import {Grid,makeStyles,TextField,form, FormControlLabel, FormLabel,Radio,RadioGroup,StyledRadio,FormControl} from '@material-ui/core'
import {Form, useForm} from '../../components/useForm'
import Controls from '../../components/controls/Controls'
import * as service from '../../services/service'


const genderItems=[
    {id:'male',title:'Male'},
    {id:'female',title:'Female'},
    {id:'other',title:'Other'}
]

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
  //  const classes = useStyles()

   const {values,setValues,handleChangeInput} =useForm(initialFValues)



//useEffect(()=>{},[x])

    return (
        <div>
            <Form>
            
            <Grid container>
                <Grid item xs={6}>
<Controls.Input
label="FullName"
name="fullName"
value={values.fullName}
onChange={handleChangeInput}
/>

                    {/* <TextField
                    variant="outlined"
                    label="FullName"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChangeInput}
                    ></TextField> */}

{/* <TextField
                    variant="outlined"
                    label="Email"
                    name="Email"
                    value={values.email}
                    ></TextField> */}

<Controls.Input
label="Email"
name="Email"
value={values.Email}
onChange={handleChangeInput}
/>

                </Grid>
                <Grid item xs={6}>
<Controls.RadioGroups
label="gender"
name="gender"
value={values.fullName}
onChange={handleChangeInput}
items={genderItems}
/>


<Controls.Select
label="Department"
name="DepartmentID"
value={values.departmentID}
onChange={handleChangeInput}
options={service.getDepartmentCollection()}
/>
                   
                </Grid>
            </Grid>
            
            </Form>
        </div>
    )
}
