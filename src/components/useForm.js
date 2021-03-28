import React,{useState} from 'react'

export function useForm(initialFValues) {

    const [values,setValues] = useState(initialFValues)
    const handleChangeInput=e=>{
        const{name,value}=e.target
        setValues({
           ...values,
           [name]:value
       })
      // alert('asad');
     // console.log(name + '--' + value)
   }

    return {
        values,
        setValues,
        handleChangeInput
    }
}


const useStyles=makeStyles(theme=>({
    root:{
    '& .MuiFormControl-root':{
        width:'80%',
        margin:theme.spacing(1)

      }
    }
}))
export  function Form(props) {
    return (
        <form className={classes.root}>
            {props.children}
        </form>   )
}

