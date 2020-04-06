import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: "0px",
		left: "0px",
		width: "100%",
		height: "100%",
		boxSizing: "border-box"
    },
  }),
);

const SpinLoad = (props: any) => {
  const classes = useStyles();

  return (
    props.loading ?
    <div className={classes.root}>
      <CircularProgress />
    </div> : null
  );
}

export default SpinLoad