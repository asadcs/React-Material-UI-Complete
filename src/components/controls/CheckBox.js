import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Checkbox as MUICheckbox } from '@material-ui/core'


export default function CheckBox(props) {
    const {name, label, value , onChange,items}=props
    return (
        <FormControl >
                <FormLabel>{label}</FormLabel>
                <MUICheckbox 
                row={true}
                name={name}
                value={value}
                onChange={onChange}
                >
                    {
                        items.map(
                            (item,index)=>(
                                <FormControlLabel  key={item.id} value={item.id} control={<Checkbox />} label={item.title} />
                       
                            )
                        )
                    }
                        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                </MUICheckbox>
        </FormControl>
    )
}
