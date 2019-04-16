import React, {Component, Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NestedList from './NestedList';

class SectionTwo extends Component {
    render(){
        return (
            <div id='section-two' style={{height: '100vh', backgroundColor: '#d6dde3'}}>
                <Grid container item xs={12} justify="center" alignItems="center">
                    <Typography variant="h3" component="h3" align="center" style={{fontFamily: 'Roboto Slab', fontSize: "1.5em", padding: "20px 20px 0px 20px"}}>
                    <span>Hi, my name is Patryk.</span><br/>
                    <span>I graduated from the Open University with a BSc degree (Computing & IT).</span>
                    <br/><span>Below are two of my main passions in life:</span>
                    </Typography>
                </Grid>
                <hr/>
                <Grid container style={{height: '80vh'}}>
                    <Grid container item xs={6} justify="center" direction="column" alignItems="center">
                        <Paper style={{backgroundColor: '#ffffff', padding: '15px',}} elevation={5}>
                            <Typography variant="h5" align="center" style={{fontFamily: 'Playfair Display', padding: '5px 0px 10px 0px', fontSize: '1.75em'}}>
                            Programmer
                            </Typography>
                            <NestedList />
                        </Paper>
                    </Grid>
                    
                    <Grid container item xs={6} justify="center" direction="column" alignItems="center">
                        <Paper style={{backgroundColor: '#ffffff', padding: '15px',}} elevation={5}>
                            <Typography variant="h5" align="center" style={{fontFamily: 'Playfair Display', padding: '5px 0px 10px 0px', fontSize: '1.75em'}}>
                            Traveller
                            </Typography>
                            
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default SectionTwo;