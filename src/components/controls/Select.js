import { FormControl, InputLabel,MenuItem,Select as MUISelect } from '@material-ui/core'
import React from 'react'

export default function Select(props) {

    const{name, label,value,onChange, options}=props
    return (
       <FormControl
       variant="outlined">
<InputLabel>{label}
</InputLabel>
<MUISelect
 name={name}
 value={value}
 onChange={onChange}
>
<MenuItem value="">None</MenuItem>
{
                        options.map(
                            item=>(
                                // <FormControlLabel value={item.id} control={<Option />} label={item.title} />
                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                            )
                        )
                    }

</MUISelect>
       </FormControl>
    )
}
