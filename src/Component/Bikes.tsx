import React, { Component } from 'react'
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import IncidentCard from './IncidentCard';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
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
        startDate: new Date('2019.08.19'),
        endDate: new Date(),
        startUnix: '',
        endUnix: '',
        loading: false,
        currentPage: 1,
        itemsPerPage: 10,
        pages: [], 
        error: false
    }

    componentDidMount() {
        this.getIncidents()
        this.handleEndDateChange(this.state.endDate)
        this.handleStartDateChange(this.state.startDate)
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

    getIncidents = () => {
        this.setLoading(true)
        this.setState(() => {
            axios.get(`${this.state.apiUrl}?query=${this.state.searchText}&occurred_before=${this.state.endUnix}&occurred_after=${this.state.startUnix}&proximity=${this.state.proximity}`)
            .then(res => {
                this.setLoading(false)
                // const pages = [...Array(res.data.incidents).keys()]
                this.setState({titles: res.data.incidents, error: false})
            })
            .catch(err => {
                this.setState({error: true})
                console.log(err)
            });
        })
    }

    onTextChange = (e: any) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            this.paginate(1)
            this.getIncidents()
        });
        console.log(e)
    }

    handleStartDateChange = (date: Date | null) => {
        console.log(date)
        if (date) {
            this.setState({startDate: date, startUnix: Date.parse(date.toDateString())/1000})
        }
    }

    handleEndDateChange = (date: Date | null) => {
        console.log(date)
        if (date){
            this.setState({endDate: date, endUnix: Date.parse(date.toDateString())/1000})
        } 
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
                        <Grid container justify="space-evenly">
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
                                format="yyyy/MM/dd"
                                value={this.state.startDate}
                                maxDate={this.state.endDate}
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
                                format="yyyy/MM/dd"
                                value={this.state.endDate}
                                onChange={this.handleEndDateChange}
                                minDate={this.state.startDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <Button variant="contained" color="primary" onClick={this.onTextChange}>Find Cases</Button>
                        </Grid>
                </MuiPickersUtilsProvider>
                <br />
                <Grid>
                    <Container maxWidth="sm">
                        <Grid container item justify="flex-end">
                            <div>
                                Total : {this.state.titles.length}
                            </div>
                        </Grid>
                    </Container>
                </Grid>
                <Grid>
                    <Container maxWidth="md">
                    {
                        (this.state.error) ? <div color="red"> Ooops, something went wrong </div>: <SpinLoad loading={this.state.loading} />
                    }
                    {
                        currentIncident.map((t: any) => (
                            <div key={t.id}>
                                <IncidentCard title={t} /> 
                            </div>
                        ))
                    }
                    {
                        (!this.state.titles.length && !this.state.loading)? <div> No result</div>: <MakePage itemsPerPage={this.state.itemsPerPage} totalItems={this.state.titles.length} paginate={this.paginate} currentPage={this.state.currentPage}/>
                    }
                    </Container>
                </Grid>
            </div>
        )
    }
}

export default Bikes;
