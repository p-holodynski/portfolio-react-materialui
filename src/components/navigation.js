import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFreeCodeCamp, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

const textStyle = {
    color: 'black',
    flex: 1,
};

const appBarStyle = {
    background: 'gainsboro'
}

const buttonStyle = {
    color: 'black',
    margin: "0 0 0 5px",
}

class Navigation extends Component {
    render() {
      return (
        <AppBar position="static" style={appBarStyle}>
            <Toolbar>
                <Typography variant="headline" style={textStyle}>
                    Patryk Holodynski
                </Typography>
                <IconButton href="#" style={buttonStyle}>
                    <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
                </IconButton>
                <IconButton href="#" style={buttonStyle}>
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg"></FontAwesomeIcon>
                </IconButton>
                <IconButton href="#" style={buttonStyle}>
                    <FontAwesomeIcon icon={faFreeCodeCamp} size="lg"></FontAwesomeIcon>
                </IconButton>
            </Toolbar>
        </AppBar>
      );
    }
}

export default Navigation;
