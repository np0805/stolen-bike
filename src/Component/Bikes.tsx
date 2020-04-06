import React, { Component } from 'react'
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import IncidentCard from './IncidentCard';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SpinLoad from './Spinner';
import MakePage from './MakePage';

class Bikes extends Component {
    state = {
        searchText: '',
        apiUrl: 'https://bikewise.org:443/api/v2/incidents',
        titles: [],
        proximity: 'Berlin',
        startDate: new Date('2019-08-18T21:11:54'),
        endDate: new Date('2019-08-19T21:11:54'),
        loading: false,

        currentPage: 1,
        itemsPerPage: 3,
        pages: [], 
    }

    componentDidMount() {
        this.getIncidents()
    }

    setLoading = (value: boolean) => {
        this.setState({loading: value})
    }

    getParams = () => {
        return {
            limit: this.state.itemsPerPage,
            page: this.state.currentPage,
            titles: this.state.titles
        }
    }

    paginate = (page: any) => {
        this.setState({currentPage: page})
    }

    gotoPage = (page: any) => {
		const params = this.getParams()
		params.page = page

        this.setLoading(true)
        axios.get(`${this.state.apiUrl}?query=${this.state.searchText}&proximity=${this.state.proximity}`)
            .then(res => {
                this.setLoading(false)
                this.setState({titles: res.data.incidents})
            })
            .catch(err => console.log(err))
	}

    getIncidents = () => {
        this.setLoading(true)
        this.setState({ currentPage: 1}, () => {
            axios.get(`${this.state.apiUrl}?query=${this.state.searchText}&proximity=${this.state.proximity}`)
            .then(res => {
                this.setLoading(false)
                // const pages = [...Array(res.data.incidents).keys()]
                this.setState({titles: res.data.incidents})
            })
            .catch(err => console.log(err));
        })
    }

    onTextChange = (e: any) => {
        console.log(e)
        this.setState({[e.target.name]: e.target.value}, () => {
            this.getIncidents()
        });
    }

    handleStartDateChange = (date: Date | null) => {
        console.log(date)
        this.setState({startDate: date})
    }

    handleEndDateChange = (date: Date | null) => {
        console.log(date)
        this.setState({endDate: date})
    }

    handleChange = (e:any) => {
		console.log(this.state)
        this.setState({[e.target.name]: e.target.value});
    }

    
    render() {
        let indexOfLastIncident = this.state.currentPage * this.state.itemsPerPage;
        let indexOfFirstIncident = indexOfLastIncident - this.state.itemsPerPage;
        let currentIncident = this.state.titles.slice(indexOfFirstIncident, indexOfLastIncident);
        console.log(this.state);
        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <TextField
                            margin="normal"
                            name="searchText"
                            value={this.state.searchText}
                            onChange={this.handleChange}
                            placeholder="Search for incidents"
                        />
                        <KeyboardDatePicker
                            disableFuture
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
                            disableFuture
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
                        <Button variant="contained" onClick={this.onTextChange}>Find Cases</Button>
                    </Grid>
                </MuiPickersUtilsProvider>
                <br />
                <Grid>
                    <Grid item>
                        <div>
                            Total : {this.state.titles.length}
                        </div>
                    </Grid>
                </Grid>
                <Grid>
                    <SpinLoad loading={this.state.loading} />
                    {
                        currentIncident.map((t: any) => (
                            <div key={t.id}>
                                <IncidentCard title={t} /> 
                            </div>
                        ))
                    }
                    {
                        (!this.state.titles.length && !this.state.loading)? <div> No result</div>: null
                    }
                    <MakePage itemsPerPage={this.state.itemsPerPage} totalItems={this.state.titles.length} paginate={this.paginate} currentPage={this.state.currentPage}/>
                </Grid>
            </div>
        )
    }
}

export default Bikes;