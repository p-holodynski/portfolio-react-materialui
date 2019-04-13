import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';

const textStyle = {
    color: 'white',
    flex: 1,
};

const appBarStyle = {
    background: 'black'
}

const buttonStyle = {
    color: 'white',
    borderColor: 'white',
}

class Navigation extends Component {
    render() {
      return (
        <AppBar position="static" style={appBarStyle}>
            <Toolbar>
                <Typography variant="headline" style={textStyle}>
                    Patryk Holodynski
                </Typography>
                <Button variant="outlined" href="#" style={buttonStyle} justifyContent="flex-end">GitHub</Button>
            </Toolbar>
        </AppBar>
      );
    }
}

export default Navigation;
