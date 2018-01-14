import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Navigation(props) {
  const { classes } = props;
  const LinkWrapper = ({ ...props }) => (
    <Link {...props} />
  )
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Toolbar className="container">
            <Typography
              to={`/`}
              component={LinkWrapper}
              type="title"
              color="inherit"
              className={classes.flex}>
              Readable
            </Typography>
            <Button
              to={`/create`}
              component={LinkWrapper}
              color="contrast">+ New Post</Button>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);