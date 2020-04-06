import React from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
}));



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
        <div>
            <nav>
                
                <ul className="list-group">
                    <div>
                        <a onClick={() => paginate(1)} href='!#' className='page-link'>
                            {"|<"}
                        </a> 
                    </div>
                    <Pagination count={pageNumbers.length} shape="rounded" showFirstButton showLastButton  />
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href='!#' className='page-link'>
                                {number}
                            </a>                           
                        </li>
                    ))}
                    <div>
                        <a onClick={() => paginate(pageNumbers.length)} href='!#' className='page-link'>
                            {">|"}
                        </a> 
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default MakePage