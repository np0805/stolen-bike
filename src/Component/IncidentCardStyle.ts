import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const IncidentCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      marginTop: 40,
      justifyContent: 'center',
      // marginLeft: '5%',
      maxWidth: '60%',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      justifyContent: 'center',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

export default IncidentCardStyles;