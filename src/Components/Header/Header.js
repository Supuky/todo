import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import useStyles from './styles'
import list from '../../assets/images/list-2828012_1280.png';

const Header = () => {
    const classes = useStyles();
    return (
        <Container>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.header} variant="h2" align="center">
                    ToDo Lists
                </Typography>
                <img className={classes.image} src={list} alt="Todo-list" height="60"/>
            </AppBar>
        </Container>
    )
}

export default Header;
