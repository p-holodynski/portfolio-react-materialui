import React, {Component, Fragment} from 'react';
import {List, ListSubheader, ListItem, ListItemIcon, ListItemText, Collapse} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, } from '@fortawesome/free-solid-svg-icons'
import {faJs, faReact, faHtml5, faCss3Alt, faBootstrap} from '@fortawesome/free-brands-svg-icons';

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
                        <FontAwesomeIcon icon={faJs} size="2x" style={{color: 'black'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="JavaScript" />
                        {this.state.open ? 
                        <FontAwesomeIcon icon={faChevronUp} size="1x" style={{color: 'black'}}></FontAwesomeIcon> : 
                        <FontAwesomeIcon icon={faChevronDown} size="1x" style={{color: 'black'}}></FontAwesomeIcon>}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faReact} size="2x" style={{color: 'black'}}></FontAwesomeIcon>
                        </ListItemIcon>
                        <ListItemText inset primary="React" />
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faBootstrap} size="2x" style={{color: 'black'}}></FontAwesomeIcon>
                        </ListItemIcon>
                        <ListItemText inset primary="Boostrap" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{color: 'black'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="CSS3" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faHtml5} size="2x" style={{color: 'black'}}></FontAwesomeIcon>
                    </ListItemIcon>
                    <ListItemText inset primary="HTML5" />
                </ListItem>
            </List>
        );
    }
}

export default NestedList;