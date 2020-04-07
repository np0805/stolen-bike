import React from 'react';
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import IncidentCardStyles from './IncidentCardStyle';

const IncidentCard = (props: any) => {
    const classes = IncidentCardStyles();
    const t = props.title;

    const u = props.title.occurred_at;
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var day_arr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    var newDate = new Date(u*1000);
    var date = newDate.getDate();
    var day = day_arr[newDate.getDay()];
    var month = months_arr[newDate.getMonth()];
    var year = newDate.getFullYear();

    return (
      <div className={classes.root}>
        <Paper elevation={10} className={classes.paper}>
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
                              {day} {month} {date} {year} - {t.address}
                          </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
            </Grid>
        </Paper>
      </div>
    )
}

export default IncidentCard;