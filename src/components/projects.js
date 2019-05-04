import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import reactImage from './img/react.png';
import angularImage from './img/angular.jpg';
import bootstrapImage from './img/bootstrap.png';
import javascriptImage from './img/javascript.png';

const cardStyle = {
    margin: '25px',
}

class Projects extends Component {

    render(){
        return (
            <Grid xs="auto" container spacing={40} justify="center" alignItems="center" direction="row" id='projects' style={{backgroundColor: '#ff9681'}}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h3" align="center" style={{fontFamily: 'Roboto Slab', fontSize: "2em", padding: "20px 0px 20px 0px", color: '#ffffff'}}>
                    <span>Projects</span><br/>
                    <span>I am currently learning:</span><br />
                    <span>React & Material-UI / PHP / WordPress / mySQL</span><br />
                    </Typography>
                </Grid>
                <Grid item xs='auto' style={cardStyle}>
                    <Card elevation={5} style={{width: '250px', height: '250px'}}>
                        <CardActionArea href="https://p-holodynski.github.io/portfolio/" target="_blank" rel="noreferrer">
                            <CardMedia
                            style={{ height: '100px', width: '100%'}}
                            image={bootstrapImage}
                            title="Bootstrap"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Old portfolio
                            </Typography>
                            <Typography component="p">
                            My first portfolio website using Bootstrap
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://p-holodynski.github.io/portfolio/" target="_blank" rel="noreferrer">
                            GitPage
                            </Button>
                            <Button size="small" color="primary" href="https://github.com/p-holodynski/portfolio" target="_blank" rel="noreferrer">
                            GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' style={cardStyle}>
                    <Card elevation={5} style={{width: '250px', height: '250px'}}>
                        <CardActionArea href="https://portfolio-react-mdl.netlify.com/" target="_blank">
                            <CardMedia
                            style={{ height: '100px', width: '100%'}}
                            image={reactImage}
                            title="React"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Portfolio React MDL
                            </Typography>
                            <Typography component="p">
                                Small portfolio website using React MDL
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://portfolio-react-mdl.netlify.com/" target="_blank" rel="noreferrer">
                                Netlify
                            </Button>
                            <Button size="small" color="primary" href="https://github.com/p-holodynski/portfolio-react-mdl" target="_blank" rel="noreferrer">
                                GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' style={cardStyle}>
                    <Card elevation={5} style={{width: '250px', height: '250px'}}>
                        <CardActionArea href="https://fcc-quote-generator-react.netlify.com/" target="_blank">
                            <CardMedia
                            style={{ height: '100px', width: '100%'}}
                            image={reactImage}
                            title="React"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Quote Generator
                            </Typography>
                            <Typography component="p">
                                Quote Generator made for the FreeCodeCamp projects section
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://fcc-quote-generator-react.netlify.com/" target="_blank" rel="noreferrer">
                                Netlify
                            </Button>
                            <Button size="small" color="primary" href="https://github.com/p-holodynski/fcc-quote-generator-react" target="_blank" rel="noreferrer">
                                GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' style={cardStyle}>
                    <Card elevation={5} style={{width: '250px', height: '250px'}}>
                        <CardActionArea href="https://codepen.io/phjoker/full/Qdmevj/" target="_blank">
                            <CardMedia
                            style={{ height: '100px', width: '100%'}}
                            image={angularImage}
                            title="Angular"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Simon Game
                            </Typography>
                            <Typography component="p">
                                Simon game made for the FreeCodeCamp projects section
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://codepen.io/phjoker/full/Qdmevj/" target="_blank" rel="noreferrer">
                                CodePen
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' style={cardStyle}>
                    <Card elevation={5} style={{width: '250px', height: '250px'}}>
                        <CardActionArea href="https://codepen.io/phjoker/full/ggvgNN/" target="_blank">
                            <CardMedia
                            style={{ height: '100px', width: '100%'}}
                            image={angularImage}
                            title="Angular"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Wikipedia API
                            </Typography>
                            <Typography component="p">
                                Wikipedia API made for the FreeCodeCamp projects section
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://codepen.io/phjoker/full/ggvgNN/" target="_blank" rel="noreferrer">
                                CodePen
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' style={cardStyle}>
                    <Card elevation={5} style={{width: '250px', height: '250px'}}>
                        <CardActionArea href="https://codepen.io/phjoker/full/mRMvYY/" target="_blank">
                            <CardMedia
                            style={{ height: '100px', width: '100%'}}
                            image={javascriptImage}
                            title="JavaScript"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Calculator
                            </Typography>
                            <Typography component="p">
                                JavaScript Calculator made for the FreeCodeCamp projects section
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://codepen.io/phjoker/full/mRMvYY/" target="_blank" rel="noreferrer">
                                CodePen
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' style={{margin: '25px'}}>
                    <Card elevation={5} style={{width: '250px', height: '250px'}}>
                        <CardActionArea href="https://codepen.io/phjoker/full/EZwwPy/" target="_blank">
                            <CardMedia
                            style={{ height: '100px', width: '100%'}}
                            image={javascriptImage}
                            title="JavaScript"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Tic Tac Toe
                            </Typography>
                            <Typography component="p">
                                Tic Tac Toe game made for the FreeCodeCamp projects section
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://codepen.io/phjoker/full/EZwwPy/" target="_blank" rel="noreferrer">
                                CodePen
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default Projects;