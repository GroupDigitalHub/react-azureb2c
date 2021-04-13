import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header'
import Lato from 'lato-font'
import { CardData } from '@bit/irishlife.irishlifedesignsystem.card-data';
import { Button } from '@bit/irishlife.irishlifedesignsystem.button';
import { CollapsableContainer } from '@bit/irishlife.irishlifedesignsystem.collapsable-container';
import { Caption } from '@bit/irishlife.irishlifedesignsystem.caption';

const maxWidth = '320'

const styles = {
  root: {
    backgroundColor: '#f7f8fb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    fontFamily: Lato
  },
  content: {
      width: `${maxWidth}px`,
      marginTop: '81px',
  },
  pageHead: {
    marginBottom: '32px'
  },
  title: {
      fontSize: '24px',
      fontWeight: 400,
      margin: '0px',
    //   fontFamily: Lato
  },
  container: {
      marginBottom: '18px'
  }
};

export const Homepage = props => {
  const { classes, content } = props;
  return (
      <div className={classes.root}>
          <Header />
          <div className={classes.content}>
            <div className={classes.pageHead}>
                <Caption text="My Irish Life" />
                <h2 className={classes.title}>Overview</h2>
            </div>
            {content && content.map(({ id, status, body, label, title}) => (
                <div key={id} className={classes.container}>
                    <CollapsableContainer status={status} body={body} maxWidth={maxWidth} label={label} title={title} />
                </div>
            ))}
          </div>
      </div>
  );
};

export default withStyles(styles)(Homepage);
