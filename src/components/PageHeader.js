import { Paper,Card, Typography, makeStyles, FormHelperText } from '@material-ui/core'
import React from 'react'

const useStyle=makeStyles(theme=>({
    root:{
        backgroundColor:'#fdfdff'
    },
    PageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    PageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    PageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
    // PageSubTitle:{
    //     paddingLeft:theme.spacing(4)
    // // }
}))
export default function PageHeader(props) {
    const classes=useStyle()
    const {title,subtitle,icon}=props
    console.log(props)
    console.log(props.title)
    return (
        <Paper elevation={1} square className={classes.root}>
            <div className={classes.PageHeader}>
                <Card className={classes.PageIcon}>
                    {props.icon}
                </Card>
                <div>
                    <Typography variant="h6" component="div" className={classes.PageTitle}>{props.title}</Typography>
                    <Typography variant="subtitle2" component="div">{props.subtitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}
