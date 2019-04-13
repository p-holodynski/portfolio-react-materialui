import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleDown} from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';


const boxStyle = {
    backgroundColor: '#eeeeee',
    padding: '10px',
    width: '300px',
}

class Main extends Component {
    render() {
      return (
        <Grid container direction="column" justify="center" alignItems="center" style={{minHeight:'100vh'}} spacing={40}>
            <Grid item xs={12}>
            <Paper style={boxStyle} elevation={5}>
                <Typography variant="h5" component="h3" align="center">
                “We travel not to escape life, but for life not to escape us.”
                </Typography>
                <Typography variant="caption" align="right">
                Anonymous
                </Typography>
            </Paper>
            </Grid>
            <Grid item xs={12}>
            <IconButton href="#">
                <FontAwesomeIcon icon={faArrowCircleDown} size="2x" style={{color: '#B31212'}}></FontAwesomeIcon>
            </IconButton>
            </Grid>
        </Grid>
      );
    }
}

export default Main;