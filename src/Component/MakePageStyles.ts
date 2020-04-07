import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const MakePageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),  
        },
    },
    active: {
        fontStyle: 'bold',
        fontWeight: 'bold',
    },
  }),
);

export default MakePageStyles