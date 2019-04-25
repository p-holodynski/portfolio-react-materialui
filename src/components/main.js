import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleDown} from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';

class Main extends Component {
    render() {
      return (
            <Grid container direction="column" justify="flex-end" alignItems="center" style={{height:'91vh', backgroundColor: '#acc7dc'}}>
                <Grid item xs={7}>
                <Paper style={{backgroundColor: '#ffffff', padding: '15px'}} elevation={5}>
                    <Typography variant="h5" align="center" style={{fontFamily: 'Playfair Display', padding: '5px 0px 10px 0px', fontSize: '1.75em'}}>
                    Junior Front End Developer
                    </Typography>
                    <Typography component="p" align="center" style={{fontFamily: 'Roboto Slab', padding: '5px 0px 5px 0px', fontSize: '1em'}}>
                    HTML | CSS | JavaScript
                    </Typography>
                    <Typography component="p" align="center" style={{fontFamily: 'Roboto Slab', padding: '5px 0px 5px 0px', fontSize: '1em'}}>
                    React | Material-UI | Bootstrap
                    </Typography>
                </Paper>
                </Grid>
                <Grid item xs={1} style={{margin: '-8px'}}>
                <IconButton href="#section-two">
                    <FontAwesomeIcon icon={faArrowCircleDown} size="2x" style={{color: '#ffffff'}}></FontAwesomeIcon>
                </IconButton>
                </Grid>
            </Grid>
      );
    }
}

export default Main;