import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import useStyles from './IncidentCardStyle';

const IncidentCard = (props: any) => {
    const classes = useStyles();
    const t = props.title;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt={t.title} src={t.media.image_url} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                              {t.title}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                              {t.description}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                              {t.occurred_at} - {t.address}
                          </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
            </Grid>
        </Paper>
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