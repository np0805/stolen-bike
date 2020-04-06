import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { GridList, GridListTile, IconButton, Zoom } from '@material-ui/core';

const IncidentCard = (props: any) => {
    const t = props.title;
    return (
        <div>
            {t.address}
            {t.description}
            <br />
        </div>
    )
}


// class IncidentCard extends Component {
//     // static propTypes = {
//     //     titles: PropTypes.array.isRequired
//     //   };
//     render() {
//         let incidentList;
//         const titles = this.props;
//         if(titles){
//             incidentList = (
//                 <GridList cols={3}>
//                     {titles.map(t => (
//                         <GridListTile
//                             title={t.title}
//                             key={t.id}
//                         >
//                             <img src={t.media.image_url} />
//                         </GridListTile>
//                     ))}
//                 </GridList>
//             )
//         }
//         else {
//             incidentList = null;
//         }
//         return (
//             <div>
//                 {incidentList}
//             </div>
//         )
//     }
// }

export default IncidentCard;