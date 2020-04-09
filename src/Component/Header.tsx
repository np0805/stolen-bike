import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import logo from './../logo.png';

const HeaderStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '80%',
    justifyContent: 'center',
    margin: 'auto',
  },
  image: {
    maxWidth: '150px',
  }
});

export default function Header() {
  const classes = HeaderStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container>
            <img src={logo} alt="logo" className={classes.image} />
            <Grid>
                <Typography variant="h2" gutterBottom>
                    Police Department of Berlin
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Stolen Bykes
                </Typography>
            </Grid>
        </Grid>
        </Container>
    </div>
  );
}