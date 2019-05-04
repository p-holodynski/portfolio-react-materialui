import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NestedList from './NestedList';
import Checklist from './Checklist';

class SectionTwo extends Component {
    render(){
        return (
            <Grid xs="auto" container spacing={40} id='section-two' direction="row" justify="center" alignItems="center" style={{backgroundColor: '#ddf1e8', paddingBottom: '80px'}}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h3" align="center" style={{fontFamily: 'Roboto Slab', fontSize: "1.5em", padding: "10px 0px 10px 0px", color: '#403d50'}}>
                    <span>Hi, my name is Patryk.</span><br/>
                    <span>I graduated from the Open University with a BSc degree (Computing & IT).</span>
                    <br/><span>Below are two of my main passions in life:</span>
                    </Typography>
                </Grid>
                <Grid item xs='auto' style={{paddingRight: '30px'}}>
                    <Paper style={{backgroundColor: '#ffffff', padding: '15px',}} elevation={5}>
                        <Typography variant="h5" align="center" style={{fontFamily: 'Playfair Display', padding: '5px 0px 10px 0px', fontSize: '1.75em', color: '#403d50'}}>
                        Programming
                        </Typography>
                        <Typography component="p" align="center" style={{fontFamily: 'Roboto Slab', padding: '5px 0px 10px 0px', fontSize: '1em', color: '#403d50'}}>
                        With a user-centered mindset,<br/> I try to develop intuitive and<br/> responsive applications.
                        </Typography>
                        <NestedList />
                    </Paper>
                </Grid>
                <Grid item xs='auto' style={{paddingLeft: '30px'}}>
                    <Paper style={{backgroundColor: '#ffffff', padding: '15px',}} elevation={5}>
                        <Typography variant="h5" align="center" style={{fontFamily: 'Playfair Display', padding: '5px 0px 10px 0px', fontSize: '1.75em', color: '#403d50'}}>
                        Travelling
                        </Typography>
                        <Typography component="p" align="center" style={{fontFamily: 'Roboto Slab', padding: '5px 0px 10px 0px', fontSize: '1em', color: '#403d50'}}>
                        I recently came back from SE Asia <br/> where I travelled for 6 months
                        </Typography>
                        <Checklist />
                    </Paper>
                </Grid>
                <Grid container xs='auto'></Grid>
            </Grid>
        );
    }
}

export default SectionTwo;