import React,{useEffect,useState} from 'react'
import {Grid,makeStyles,TextField,form, FormControlLabel, FormLabel,Radio,RadioGroup,StyledRadio,FormControl} from '@material-ui/core'
import {Form, useForm} from '../../components/useForm'
import Input from '../../components/controls/Input'



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
<Input
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

<Input
label="Email"
name="Email"
value={values.Email}
onChange={handleChangeInput}
/>

                </Grid>
                <Grid item xs={6}>
                    <FormControl >
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup 
                    row={true}
                    name="gender"
                    value={values.fullName}
                    onChange={handleChangeInput}
                    >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            
            </Form>
        </div>
    )
}
