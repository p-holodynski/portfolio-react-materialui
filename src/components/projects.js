import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

class Projects extends Component {
    render(){
        return (
            <Grid xs="auto" container spacing={24} justify="center" alignItems="center" direction="row" id='projects' style={{backgroundColor: '#edece8', padding: '0px 0px 0px 40px'}}>
                <Grid item xs={12} style={{margin: '0px 10px 10px 10px'}}>
                    <Typography variant="h3" component="h3" align="center" style={{fontFamily: 'Roboto Slab', fontSize: "2em", padding: "20px 20px 0px 20px"}}>
                    <span>Projects:</span><br/>
                    <span>I am currently learning React and Material-UI</span>
                    </Typography>
                </Grid>
                

                    <Grid item>
                        <Card elevation={5} style={{width: '250px', height: '250px'}}>
                            <CardActionArea href="https://p-holodynski.github.io/portfolio/" target="_blank">
                                <CardMedia
                                style={{ height: '100px', width: '100%'}}
                                image={'http://getbootstrap.com/docs/4.3/assets/brand/bootstrap-social.png'}
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
                                <Button size="small" color="primary" href="https://p-holodynski.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                                    GitPage
                                </Button>
                                <Button size="small" color="primary" href="https://github.com/p-holodynski/portfolio" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card elevation={5} style={{width: '250px', height: '250px'}}>
                            <CardActionArea href="https://p-holodynski-portfolio.netlify.com/" target="_blank">
                                <CardMedia
                                style={{ height: '100px', width: '100%'}}
                                image={'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png'}
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
                                <Button size="small" color="primary" href="https://p-holodynski-portfolio.netlify.com/" target="_blank" rel="noopener noreferrer">
                                    Netlify
                                </Button>
                                <Button size="small" color="primary" href="https://github.com/p-holodynski/portfolio-react-mdl" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card elevation={5} style={{width: '250px', height: '250px'}}>
                            <CardActionArea href="https://fcc-quote-generator-react.netlify.com/" target="_blank">
                                <CardMedia
                                style={{ height: '100px', width: '100%'}}
                                image={'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png'}
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
                                <Button size="small" color="primary" href="https://fcc-quote-generator-react.netlify.com/" target="_blank" rel="noopener noreferrer">
                                    Netlify
                                </Button>
                                <Button size="small" color="primary" href="https://github.com/p-holodynski/fcc-quote-generator-react" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card elevation={5} style={{width: '250px', height: '250px'}}>
                            <CardActionArea href="https://codepen.io/phjoker/full/Qdmevj/" target="_blank">
                                <CardMedia
                                style={{ height: '100px', width: '100%'}}
                                image={'https://cms-assets.tutsplus.com/uploads/users/1251/posts/30113/preview_image/angular-logo.jpg'}
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
                                <Button size="small" color="primary" href="https://codepen.io/phjoker/full/Qdmevj/" target="_blank" rel="noopener noreferrer">
                                    CodePen
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    
                    <Grid item>
                        <Card elevation={5} style={{width: '250px', height: '250px'}}>
                            <CardActionArea href="https://codepen.io/phjoker/full/ggvgNN/" target="_blank">
                                <CardMedia
                                style={{ height: '100px', width: '100%'}}
                                image={'https://cms-assets.tutsplus.com/uploads/users/1251/posts/30113/preview_image/angular-logo.jpg'}
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
                                <Button size="small" color="primary" href="https://codepen.io/phjoker/full/ggvgNN/" target="_blank" rel="noopener noreferrer">
                                    CodePen
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card elevation={5} style={{width: '250px', height: '250px'}}>
                            <CardActionArea href="https://codepen.io/phjoker/full/mRMvYY/" target="_blank">
                                <CardMedia
                                style={{ height: '100px', width: '100%'}}
                                image={'https://cdn-images-1.medium.com/max/1109/1*TWVs8hNCI7B7t2Y4tA-u1A.png'}
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
                                <Button size="small" color="primary" href="https://codepen.io/phjoker/full/mRMvYY/" target="_blank" rel="noopener noreferrer">
                                    CodePen
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card elevation={5} style={{width: '250px', height: '250px'}}>
                            <CardActionArea href="https://codepen.io/phjoker/full/EZwwPy/" target="_blank">
                                <CardMedia
                                style={{ height: '100px', width: '100%'}}
                                image={'https://cdn-images-1.medium.com/max/1109/1*TWVs8hNCI7B7t2Y4tA-u1A.png'}
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
                                <Button size="small" color="primary" href="https://codepen.io/phjoker/full/EZwwPy/" target="_blank" rel="noopener noreferrer">
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