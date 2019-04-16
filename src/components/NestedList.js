import React, {Component, Fragment} from 'react';
import {List, ListSubheader, ListItem, ListItemIcon, ListItemText, Collapse} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp, faHeart} from '@fortawesome/free-solid-svg-icons'
import {faJs, faReact, faHtml5, faCss3Alt, faBootstrap, faAngular, faJsSquare, faUikit} from '@fortawesome/free-brands-svg-icons';

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
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faJs} size="2x" style={{color: '#f3da64'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="JavaScript" />
                        {this.state.open ? 
                        <FontAwesomeIcon icon={faChevronUp} size="1x" style={{color: '#f3da64'}}></FontAwesomeIcon> : 
                        <FontAwesomeIcon icon={faChevronDown} size="1x" style={{color: '#f3da64'}}></FontAwesomeIcon>}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faReact} size="2x" style={{color: '#abe1fd'}}></FontAwesomeIcon>
                        </ListItemIcon>
                        <ListItemText inset primary="React" />
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faAngular} size="2x" style={{color: '#de6868'}}></FontAwesomeIcon>
                        </ListItemIcon>
                        <ListItemText inset primary="Angular" />
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faJsSquare} size="2x" style={{color: '#f3da64'}}></FontAwesomeIcon>
                        </ListItemIcon>
                            <ListItemText inset primary="jQuery" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faBootstrap} size="2x" style={{color: '#bfb1d5'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="Bootstrap" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faUikit} size="2x" style={{color: '#abe1fd'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="Material-UI" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{color: '#546d5a'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="CSS3" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faHtml5} size="2x" style={{color: '#de6868'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="HTML5" />
                </ListItem>
            </List>
        );
    }
}

export default NestedList;