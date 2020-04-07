import React from 'react';
import { Typography, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import logo from './../logo.png';

const HeaderStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '80%',
    marginLeft: '20%',
    margin: 20,
  },
  image: {
    maxWidth: '150px',
  }
});

export default function Header() {
  const classes = HeaderStyles();

  return (
    <div className={classes.root}>
        <Grid container>
            <img src={logo} className={classes.image} />
            <Grid>
                <Typography variant="h2" gutterBottom>
                    Police Department of Berlin
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Stolen Bykes
                </Typography>
            </Grid>
        </Grid>
    </div>
  );
}