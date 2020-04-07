import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MakePageStyles from './MakePageStyles';

const MakePage = (props: any) => {
    const classes = MakePageStyles();
    const pageNumbers = [];
    const totalItems = props.totalItems;
    const itemsPerPage = props.itemsPerPage;
    const paginate = props.paginate;
    const currentPage = props.currentPage;

    for(let i=1; i<= Math.ceil(totalItems / itemsPerPage); ++i) {
        pageNumbers.push(i);
    }

    return (
        <div className={classes.root}>
            <ButtonGroup size="small" aria-label="contained primary button group">
                <Button onClick={() => paginate(1)} href='!#' className="classes.active">{"<< First"}</Button>
                {pageNumbers.map(number => (
                    <Button key={number} onClick={() => paginate(number)} href='!#'
                        className={((currentPage === number) ? classes.active : "")}
                    >
                        {number}
                    </Button>
                ))}
                <Button onClick={() => paginate(pageNumbers.length)} href='!#'>{"Last >>"}</Button>
            </ButtonGroup>
        </div>
    )
}

export default MakePage