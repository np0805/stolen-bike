import React, { Component } from 'react'
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import IncidentCard from './IncidentCard';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class Bikes extends Component {
    state = {
        searchText: '',
        limit: 10,
        apiUrl: 'https://bikewise.org:443/api/v2/incidents',
        titles: [],
        proximity: 'Berlin',
        startDate: new Date('2014-08-18T21:11:54'),
        endDate: new Date('2014-08-19T21:11:54'),
    }

    onTextChange = (e: any) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            axios.get(`${this.state.apiUrl}/?query=${this.state.searchText}&per_page=${this.state.limit}&proximity=${this.state.proximity}`)
            .then(res => this.setState({titles: res.data.incidents}))
            .catch(err => console.log(err));
        });
    }

    handleStartDateChange = (date: Date | null) => {
        this.setState({startDate: date})
    }

    handleEndDateChange = (date: Date | null) => {
        this.setState({endDate: date})
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <TextField
                            margin="normal"
                            name="searchText"
                            value={this.state.searchText}
                            onChange={this.onTextChange}
                            placeholder="Search for incidents"
                        />
                        <KeyboardDatePicker
                        margin="normal"
                        id="start-date"
                        label="Choose Start Date"
                        format="MM/dd/yyyy"
                        value={this.state.startDate}
                        onChange={this.handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                        <KeyboardDatePicker
                        margin="normal"
                        id="end-date"
                        label="Choose End Date"
                        format="MM/dd/yyyy"
                        value={this.state.endDate}
                        onChange={this.handleEndDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <br />
                {
                    this.state.titles.map((t: any) =>
                        <IncidentCard title={t} /> 
                    )
                }
                {!this.state.titles.length ? <div> No result</div>: null}
            </div>
        )
    }
}

export default Bikes;