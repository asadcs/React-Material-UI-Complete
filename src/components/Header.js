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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item  >
                        <InputBase />
                    </Grid>
                    <Grid item sm >
                        <InputBase />
                    </Grid>
                    <Grid item  >
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon />
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
