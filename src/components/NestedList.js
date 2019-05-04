import React, {Component} from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Collapse} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faJs, faReact, faHtml5, faCss3Alt, faBootstrap, faJsSquare, faUikit, faPhp} from '@fortawesome/free-brands-svg-icons';

class NestedList extends Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };
    
    render() {
        return (
            <List style={{color: 'black'}}>
                <ListItem button onClick={this.handleClick} alignItems="flex-start">
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faJs} size="2x" style={{color: '#f3da64'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="JavaScript"  style={{paddingLeft: '40px'}}/>
                        {this.state.open ? 
                        <FontAwesomeIcon icon={faChevronUp} size="1x" style={{color: '#f3da64'}}></FontAwesomeIcon> : 
                        <FontAwesomeIcon icon={faChevronDown} size="1x" style={{color: '#f3da64'}}></FontAwesomeIcon>}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faReact} size="2x" style={{color: '#abe1fd'}}></FontAwesomeIcon>
                        </ListItemIcon>
                        <ListItemText inset primary="React"  style={{paddingLeft: '40px'}}/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faJsSquare} size="2x" style={{color: '#f3da64'}}></FontAwesomeIcon>
                        </ListItemIcon>
                            <ListItemText inset primary="jQuery"  style={{paddingLeft: '40px'}}/>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem alignItems="flex-start">
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faBootstrap} size="2x" style={{color: '#bfb1d5'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="Bootstrap"  style={{paddingLeft: '40px'}}/>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faUikit} size="2x" style={{color: '#abe1fd'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="Material-UI"  style={{paddingLeft: '40px'}}/>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faPhp} size="2x" style={{color: '#779ecb'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="PHP"  style={{paddingLeft: '25px'}}/>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{color: '#546d5a'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="CSS3"  style={{paddingLeft: '40px'}}/>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faHtml5} size="2x" style={{color: '#de6868'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="HTML5" style={{paddingLeft: '40px'}}/>
                </ListItem>
            </List>
        );
    }
}

export default NestedList;