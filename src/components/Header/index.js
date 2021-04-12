import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from './Logo-shard.svg';

const styles = {
  root: {
    height: '54px',
    backgroundColor: '#fff',
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    boxShadow: '0px 0px 20px rgba(82, 97, 172, 0.24);'
  }
};

export const Header = props => {
  const { classes } = props;
  return (
      <div className={classes.root}>
          <img src={Logo} alt="One Irish Life" />
      </div>
  );
};

export default withStyles(styles)(Header);
