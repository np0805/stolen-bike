import React from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab/';
import { makeStyles, createStyles, Theme  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),  
      },
    },
  }),
);



const MakePage = (props: any) => {
    const classes = useStyles();
    const pageNumbers = [];
    const totalItems = props.totalItems;
    const itemsPerPage = props.itemsPerPage;
    const paginate = props.paginate;


    for(let i=1; i<= Math.ceil(totalItems / itemsPerPage); ++i) {
        pageNumbers.push(i);
    }

    return (
        <div className={classes.root}>
            <ButtonGroup size="small" aria-label="contained primary button group">
                <Button onClick={() => paginate(1)} href='!#' className="classes.active">{"<< First"}</Button>
                {pageNumbers.map(number => (
                    <Button key={number} onClick={() => paginate(number)} href='!#'>
                        {number}
                    </Button>
                ))}
                <Button onClick={() => paginate(pageNumbers.length)} href='!#'>{"Last >>"}</Button>
            </ButtonGroup>
        </div>
    )
}

export default MakePage