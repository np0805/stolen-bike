import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import axios from 'axios';
import IncidentCard from './IncidentCard';

class Bikes extends Component {
    state = {
        searchText: '',
        limit: 10,
        apiUrl: 'https://bikewise.org:443/api/v2/incidents',
        titles: [],
        proximity: 'Berlin'
    }

    onTextChange = (e: any) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            axios.get(`${this.state.apiUrl}/?query=${this.state.searchText}&per_page=${this.state.limit}&proximity=${this.state.proximity}`)
            .then(res => this.setState({titles: res.data.incidents}))
            .catch(err => console.log(err));
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    fullWidth={true}
                    placeholder="Search for incidents"
                />
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