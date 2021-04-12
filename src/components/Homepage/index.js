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

const data = [
    {
        id: 0,
        label: 'Cover is great',
        status: 'great',
        title: 'Health Insurance',
        body: [
        {
            Component: CardData,
            id: 1,
            props: {
                label: 'Policy Number',
                data: '0012 0389 80',
                type: 'copy',
            }
        },
        {
            Component: CardData,
            id: 2,
            props: {
                label: 'Renewal Date',
                data: '01 Sep 2021',
            }
        },
        {
            Component: CardData,
            id: 3,
            props: {
                label: 'Policy Name',
                data: 'Net More 300 ILH',
            }
        },
        {
            Component: CardData,
            id: 4,
            props: {
                label: 'Names on Policy',
                data: 'Niamh Murphy',
                type: 'profile',
            }
        },
        {
            Component: Button,
            id: 5,
            props: {
                label: 'View details',
                icon: "rightArrow",
                iconPosition: "right",
                onClick: () => null
            },
            position: 'center'
        },
        ]
    },
    {
        id: 1,
        label: 'Cover is good',
        status: 'good',
        title: 'Life Insurance',
        body: [
        {
            Component: CardData,
            id: 1,
            props: {
                label: 'Policy Number',
                data: '0012 0389 80',
                type: 'copy',
            }
        },
        {
            Component: CardData,
            id: 2,
            props: {
                label: 'Renewal Date',
                data: '01 Sep 2021',
            }
        },
        {
            Component: CardData,
            id: 3,
            props: {
                label: 'Policy Name',
                data: 'Net More 300 ILH',
            }
        },
        {
            Component: CardData,
            id: 4,
            props: {
                label: 'Names on Policy',
                data: 'Niamh Murphy',
                type: 'profile',
            }
        },
        {
            Component: Button,
            id: 5,
            props: {
                label: 'View details',
                icon: "rightArrow",
                iconPosition: "right",
                onClick: () => null
            },
            position: 'center'
        },
        ]
    },
    {
        id: 2,
        label: 'Cover is poor',
        status: 'poor',
        title: 'Pensions',
        body: [
        {
            Component: CardData,
            id: 1,
            props: {
                label: 'Policy Number',
                data: '0012 0389 80',
                type: 'copy',
            }
        },
        {
            Component: CardData,
            id: 2,
            props: {
                label: 'Renewal Date',
                data: '01 Sep 2021',
            }
        },
        {
            Component: CardData,
            id: 3,
            props: {
                label: 'Policy Name',
                data: 'Net More 300 ILH',
            }
        },
        {
            Component: CardData,
            id: 4,
            props: {
                label: 'Names on Policy',
                data: 'Niamh Murphy',
                type: 'profile',
            }
        },
        {
            Component: Button,
            id: 5,
            props: {
                label: 'View details',
                icon: "rightArrow",
                iconPosition: "right",
                onClick: () => null
            },
            position: 'center'
        },
        ]
    },
    {
        id: 3,
        label: 'Cover is okay',
        status: 'okay',
        title: 'Pensions',
        body: [
        {
            Component: CardData,
            id: 1,
            props: {
                label: 'Policy Number',
                data: '0012 0389 80',
                type: 'copy',
            }
        },
        {
            Component: CardData,
            id: 2,
            props: {
                label: 'Renewal Date',
                data: '01 Sep 2021',
            }
        },
        {
            Component: CardData,
            id: 3,
            props: {
                label: 'Policy Name',
                data: 'Net More 300 ILH',
            }
        },
        {
            Component: CardData,
            id: 4,
            props: {
                label: 'Names on Policy',
                data: 'Niamh Murphy',
                type: 'profile',
            }
        },
        {
            Component: Button,
            id: 5,
            props: {
                label: 'View details',
                icon: "rightArrow",
                iconPosition: "right",
                onClick: () => null
            },
            position: 'center'
        },
        ]
    },
];

export const Homepage = props => {
  const { classes } = props;
  return (
      <div className={classes.root}>
          <Header />
          <div className={classes.content}>
            <div className={classes.pageHead}>
                <Caption text="My Irish Life" />
                <h2 className={classes.title}>Overview</h2>
            </div>
            {data.map(({ id, status, body, label, title}) => (
                <div key={id} className={classes.container}>
                    <CollapsableContainer status={status} body={body} maxWidth={maxWidth} label={label} title={title} />
                </div>
            ))}
          </div>
      </div>
  );
};

export default withStyles(styles)(Homepage);
