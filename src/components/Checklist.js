import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FormControl } from '@material-ui/core';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class Checklist extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    // const { classes } = this.props;

    return (
      <Fragment>
        <FormControl>
          <FormGroup column>
            <FormControlLabel
              control={
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>
              }
              label="Singapore"
              />
            <FormControlLabel
              control={
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              label="Indonesia"
              />
            <FormControlLabel
              control={
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              label="Philippines"
            />
            <FormControlLabel
              control={
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              label="Vietnam"
            />
          </FormGroup>
        </FormControl>
        <FormControl>
          <FormGroup column>
            <FormControlLabel
              control={
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              label="Cambodia"
            />
            <FormControlLabel
              control={
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              label="Thailand"
            />
            <FormControlLabel
              control={
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              label="Laos"
            />
            <FormControlLabel
              control={
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              label="Malaysia"
            />
          </FormGroup>
        </FormControl>
      </Fragment>
    );
  }
}

Checklist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checklist);