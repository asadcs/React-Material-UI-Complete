import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Badge, Grid, InputBase } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:'#fff'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    searchInput: {
        opacity: '0.6',
        padding : '0px 8px',
        fontSize : '0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight:'8px'
        }
    },
    btnRoot:{
        backgroundColor:'green'
    },
    btnLabel:{
        backgroundColor:'red'
    }
}));


export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item  >
                        <InputBase placeholder="Search" className={classes.searchInput} startAdornment={<SearchIcon fontSize="small"/>}/>
                    </Grid>
                    <Grid item sm >
                        <InputBase />
                    </Grid>
                    <Grid item  >
                        <IconButton classes={{root:classes.btnRoot,label:classes.btnLabel}} >
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>


                <Typography variant="h6" className={classes.title}>
                    News
    </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

    )
}
