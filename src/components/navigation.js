import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFreeCodeCamp, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';


const textStyle = {
    color: '#ffffff',
    flex: 1,
    fontFamily: 'Playfair Display',
    fontSize: '2em',
};

const appBarStyle = {
    background: '#acc7dc',
    width: '101.5%',
}

const buttonStyle = {
    color: '#ffffff',
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
                <IconButton href="https://github.com/p-holodynski" target='_blank' rel="noreferrer" style={buttonStyle}>
                    <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/patryk-holodynski/" target='_blank' rel="noreferrer" style={buttonStyle}>
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg"></FontAwesomeIcon>
                </IconButton>
                <IconButton href="https://www.freecodecamp.org/p-holodynski" target='_blank' rel="noreferrer" style={buttonStyle}>
                    <FontAwesomeIcon icon={faFreeCodeCamp} size="lg"></FontAwesomeIcon>
                </IconButton>
            </Toolbar>
        </AppBar>
      );
    }
}

export default Navigation;
