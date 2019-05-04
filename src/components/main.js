import React, {Component, Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleDown} from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';

const boxStyle = {
    backgroundColor: '#ffffff',
    padding: '15px',
}

class Main extends Component {
    render() {
      return (
          <Fragment>
            <Grid container direction="column" spacing={40} justify="center" alignItems="center" style={{height: '87vh', backgroundColor: '#acc7dc'}}>
                <Grid item xs='auto'>
                <Paper style={boxStyle} elevation={5}>
                    <Typography variant="h5" align="center" style={{fontFamily: 'Playfair Display', padding: '5px 0px 10px 0px', fontSize: '1.75em'}}>
                    Junior Full Stack Developer
                    </Typography>
                    <Typography component="p" align="center" style={{fontFamily: 'Roboto Slab', padding: '5px 0px 5px 0px', fontSize: '1em'}}>
                    HTML | CSS | JavaScript | PHP | mySQL
                    </Typography>
                    <Typography component="p" align="center" style={{fontFamily: 'Roboto Slab', padding: '5px 0px 5px 0px', fontSize: '1em'}}>
                    React | Material-UI | Bootstrap | WordPress
                    </Typography>
                </Paper>
                </Grid>
                </Grid>
                <Grid container spacing={40} direction="column" justify="center" alignItems="center" xs='auto' style={{backgroundColor: '#acc7dc', paddingBottom: '10px', paddingTop: '-20px'}}>
                <IconButton href="#section-two">
                    <FontAwesomeIcon icon={faArrowCircleDown} size="2x" style={{color: '#ffffff'}}></FontAwesomeIcon>
                </IconButton>
                </Grid>
            </Fragment>
      );
    }
}

export default Main;