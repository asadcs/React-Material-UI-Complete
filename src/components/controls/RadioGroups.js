import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MUIRadioGroup } from '@material-ui/core'
import React from 'react'

export default function RadioGroups(props) {
    const {name, label, value , onChange,items}=props
    return (
        <FormControl >
                <FormLabel>{label}</FormLabel>
                <MUIRadioGroup 
                row={true}
                name={name}
                value={value}
                onChange={onChange}
                >
                    {
                        items.map(
                            (item,index)=>(
                                <FormControlLabel  key={item.id} value={item.id} control={<Radio />} label={item.title} />
                       
                            )
                        )
                    }
                        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                </MUIRadioGroup>
        </FormControl>
    )
}  
